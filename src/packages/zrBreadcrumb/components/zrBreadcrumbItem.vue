<template>
    <span class="zr-breadcrumb-item" :class="[to ? 'to' : '', isActive ? 'active' : '']" @click="toLink">
        <span class="label">
            <slot></slot>
        </span>
        <span class="separator" v-if="that.$props.icon">
            <zrIcon :name="that.$props.icon" :size="14" color="#ccc"></zrIcon>
        </span>
        <span v-else class="separator">{{ that.$props.separator }}</span>
    </span>
</template>
<script>
export default {
    name: 'zrBreadcrumbItem',
    props: {
        to: {
            type: String
        },
        type: {
            type: String,
            default: 'push'
        },
    },
    inject: {
        that: {
            default: {}
        }
    },
    data() {
        return {
            myIndex: 1
        }
    },
    created() {
        this.myIndex = this.that.initIndex
        this.that.initIndex += 1
    },
    methods: {
        toLink() {
            this.that.currentIndex = this.myIndex
            this.$props.to && this.$router[this.$props.type](this.$props.to)
        }
    },
    computed: {
        isActive() {
            return this.myIndex <= this.that.currentIndex
        }
    }
}
</script>
<script setup>
import zrIcon from '../../zrIcon/zrIcon.vue';
</script>
<style lang="scss" >
.zr-breadcrumb-item:last-child {
    .separator {
        display: none;
    }
}

.zr-breadcrumb-item {
    font-size: 14px;

    .separator {
        vertical-align: middle;
    }

    .label {
        margin: 0 4px;
    }

    &.active {
        font-weight: 600;
    }

    &.to {
        cursor: pointer;
    }
}
</style>