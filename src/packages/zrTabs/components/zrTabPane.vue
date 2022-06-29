<template>

    <li :ref="name + '_li'" v-if="!content" class="zr-tabs-pane"
        :class="[that.modelValue == name ? 'active' : '', that.type]" @click="change">
        {{ label }}
    </li>
    <li v-else class="zr-tabs-content" v-show="that.modelValue == name">
        <slot></slot>
    </li>
</template>
<script>
export default {
    name: 'zrTabPane',
    props: {
        label: {
            type: String
        },
        name: {
            type: String
        }
    },
    inject: ['that', 'content'],
    mounted() {
        if (this.that.modelValue == this.$props.name) {
            this.change(this.$refs[this.$props.name + '_li'], true)
        }
    },
    methods: {
        change(e, type = false) {
            if (!this.that.type) {
                if (type) {
                    try {
                        const width = e.clientWidth - 20
                        const moveLength = e.offsetLeft
                        this.that.emits_tab_click(this.$props.name, this.label, width, moveLength)
                    } catch (e) { }
                } else {
                    const width = e.target.clientWidth - 20
                    const moveLength = e.target.offsetLeft
                    this.that.emits_tab_click(this.$props.name, this.label, width, moveLength)
                }
            } else {
                this.that.emits_tab_type_click(this.$props.name, this.label)
            }


        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../index.scss';

.zr-tabs-pane {
    padding-right: 20px;
    padding-bottom: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;



    &.active {
        color: $primary;

        &.card {
            border-bottom: unset;
        }

    }

    &.card {
        padding-left: 20px;
        padding-bottom: 0px;
        border: 1px solid red;
        margin-left: -1px;
    }

}

.zr-tabs-content {
    margin-top: 20px;
}
</style>