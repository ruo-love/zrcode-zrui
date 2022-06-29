<template>
    <div class="zr-tabs-container">
        <ul class="zr-tabs-head" :class="[type]">
            <li class="active_bar"
                :style="{ 'width': widthValue + 'px', 'transform': 'translateX(' + moveValue + 'px)' }">
            </li>
            <slot></slot>
        </ul>
        <zrTabContetn>
            <slot></slot>
        </zrTabContetn>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String
        },
        type: {
            type: String,
            default: ''
        }
    },
    emits: ['tab_click', 'update:modelValue', 'emits_tab_type_click'],
    provide() {
        return {
            that: this,
            content: false,
        }
    },
    name: 'zrTabs',
    data() {
        return {
            pans: [],
            moveValue: 0,
            widthValue: 0
        }
    },
    methods: {
        emits_tab_click(value, target, width, moveLength) {
            this.moveValue = moveLength
            this.widthValue = width
            this.$emit('update:modelValue', value)
            this.$emit('tab_click', value)
        },
        emits_tab_type_click(value, target,) {
            this.$emit('update:modelValue', value)
            this.$emit('tab_click', value)
        },
    }
}
</script>
<style lang="scss">
.zr-tabs-container {
    width: 100%;

    .zr-tabs-head {
        position: relative;
        display: flex;


        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #e4e7ed;
            z-index: 1;
        }

        &.card::after {
            content: unset;
        }

        .active_bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 64px;
            background-color: $primary;
            z-index: 4;
            transition: transform .3s cubic-bezier(.645, .045, .355, 1);
            list-style: none;

        }


    }


}
</style>