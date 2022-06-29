<template>
    <div class="zr-steps-container" :class="direction === 'vertical' ? 'vertical' : ''">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: Number,
            default: 0
        },
        finish_status: {
            type: String,
            default: 'primary'
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        space: {
            type: Number,
            default: 200
        }
    },
    name: 'zrSteps',
    provide() {
        return {
            that: this
        }
    },
    data() {
        return {
            index: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.zr-steps-container {
    display: flex;

    &.vertical {
        flex-direction: column; //vertical
    }
}
</style>