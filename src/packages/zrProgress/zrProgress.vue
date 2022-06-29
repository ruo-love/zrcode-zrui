<template>
    <div v-if="!circle" class="zr-progress-warp">
        <div class="zr-progress-outline" :class="text_inside ? 'text_inside' : ''">
            <div class="zr-progress-bar" :class="['zr-progress-' + status]"
                :style="{ 'width': percentage + '%', 'backgroundColor': color ? color : '' }">
                <span v-if="text_inside" class="zr-progress-format">{{ format ? format(percentage) : percentage + '%'
                }}</span>
            </div>
        </div>
        <span v-if="!text_inside" class="zr-progress-format">{{ format ? format(percentage) : percentage + '%' }}</span>
    </div>
    <div v-else class="zr-progress-circle-warp">
        <svg :width="size" :height="size" viewBox="0 0 100 100">
            <circle r="50" cx="50" cy="50" fill="none" class="progress-background"></circle>
            <circle r="50" cx="50" cy="50" fill="none" :stroke="color" :class="['zr-progress-' + status]"
                class="progress-bar" stroke-dasharray="314" :stroke-dashoffset="(1 - percentage / 100) * 314"></circle>
        </svg>
        <span class="desc">{{ format ? format(percentage) : percentage + '%' }}</span>
    </div>
</template>
<script lang="ts">
import { type } from 'os'

export default {
    name: 'zrProgress'
}
</script>

<script lang="ts" setup>

const props = defineProps(
    {
        circle: {
            type: Boolean,
            default: false
        },
        status: {
            default: 'primary',
        },
        percentage: {
            type: Number,
            default: 50
        },
        format: {
            type: Function,

        },
        text_inside: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
        },
        size: {
            type:[ Number,String],
            default: 200
        }
    }
)

</script>

<style lang="scss" scoped>
@import '../index.scss';

.zr-progress-warp {
    margin-bottom: 20px;

    .zr-progress-outline {
        display: inline-block;
        position: relative;
        min-width: 300px;
        height: 6px;
        background-color: #d8dbea;
        border-radius: 100px;
        overflow: hidden;

        &.text_inside {
            height: 22px;
            line-height: 22px;
        }

        .zr-progress-bar {
            position: absolute;
            height: 100%;
            transition: width 0.6 ease-in;
            border-radius: 100px;


            .zr-progress-format {
                position: absolute;
                right: 5px;
                font-size: 14px;
                color: #fff;
            }


            &.zr-progress-primary {
                background-color: $primary;
            }

            &.zr-progress-info {
                background-color: $info;
            }

            &.zr-progress-error {
                background-color: $error;
            }

            &.zr-progress-warning {
                background-color: $warning;
            }

            &.zr-progress-success {
                background-color: $success;
            }
        }
    }

    .zr-progress-format {
        margin-left: 4px;
        vertical-align: middle;
        color: $text-gray;
        font-size: 12px;

    }
}

.zr-progress-circle-warp {
    display: inline-block;
    position: relative;

    circle {
        stroke-width: 10px;

        transform-origin: center;

    }

    .progress-background {
        stroke: #d8dbea;
        transform: scale(0.85);
    }

    .progress-bar {
        stroke: rgba(41, 45, 62);
        transform: scale(0.85) rotate(-90deg);

        &.zr-progress-primary {
            stroke: $primary;
        }

        &.zr-progress-info {
            stroke: $info;
        }

        &.zr-progress-error {
            stroke: $error;
        }

        &.zr-progress-warning {
            stroke: $warning;
        }

        &.zr-progress-success {
            stroke: $success;
        }
    }

    .desc {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>