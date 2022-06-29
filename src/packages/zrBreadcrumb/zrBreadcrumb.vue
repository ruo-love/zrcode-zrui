<template>
    <div class="zr-breadcrumb">
        <slot></slot>
    </div>
</template>
<script >
export default {
    name: 'zrBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/',
        },
        icon: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            default: 0
        }
    },
    provide() {
        return {
            that: this,
        }
    },
    data() {
        return {
            initIndex: 0,
            currentIndex: this.$props.index
        }
    }
}
</script>

<style lang="scss" scoped>
</style>