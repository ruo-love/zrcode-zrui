<template>
    <div class="zr-step"
        :class="[`is-${that.direction}`, `is-${that.finish_status}`, that.active >= myIndex ? 'active' : '', that.direction === 'vertical' ? 'vertical' : '']"
        :style="{ 'width': that.space + 'px' }">
        <div class="zr-step-head">
            <div class="zr-step-line-warp">
                <i class="zr-step-line-inner"></i>
            </div>
            <div v-if="!icon" class="zr-step-icon-warp  default-icon">
                <zrIcon name="tick" color="#000"></zrIcon>

            </div>
            <div v-else class="zr-step-icon-warp">
                <zrIcon :name="icon" color="#000" :size="20"></zrIcon>
            </div>

        </div>
        <div class="zr-step-main">
            <span class="title">{{ title }}</span>
            <p class="desc">{{ description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zrStep',
    props: {
        icon: {
            type: String,
        },
        title: {
            type: String,
            default: '标题'
        },
        description: {
            type: String,
            default: '描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字'
        }
    },
    inject: ['that'],
    data() {
        return {
            myIndex: 0
        }
    },
    created() {
        this.myIndex = this.that.index
        this.that.index += 1
    }

}
</script>
<script setup>
import zrIcon from '../../zrIcon/zrIcon.vue'
</script>
<style lang="scss">
@import '../../index.scss';

.zr-step {



    .zr-step-head {
        position: relative;
        width: 100%;

        .zr-step-line-warp {
            position: absolute;
            height: 2px;
            width: 100%;
            top: 11px;
            left: 0;
            right: 0;
            border-color: inherit;
            background-color: #c0c4cc;

            .zr-step-line-inner {
                display: block;
                border-color: inherit;
                transition: .15s ease-out;
                box-sizing: border-box;
                width: 0;
                height: 100% !important;
            }
        }

        .zr-step-icon-warp {
            position: relative;
            z-index: 1;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            font-size: 14px;
            box-sizing: border-box;
            background: #fff;
            transition: .15s ease-out;

            &.default-icon {
                border-radius: 50%;
                border: 2px solid;
                border-color: inherit;
            }
        }
    }

    &.vertical {
        display: flex;

        .zr-step-head {

            width: 70%;

            .zr-step-line-warp {
                height: 100%;
                width: 2px;
                top: 0;
                left: 10px;

            }
        }
    }

    .zr-step-main {
        .title {
            font-weight: 600;
        }

        .desc {
            font-size: 12px;
            margin: 0;
            line-height: 1.5em;
            color:$text-gray;
        }
    }

    &.active {
        &.is-success {
            .zr-step-line-inner {
                width: 100%;
                background-color: $success;
            }

            .zr-step-icon-warp {
                border-color: $success;

                .icon {
                    fill: $success !important;
                }
            }

            .zr-step-main {
                color: $success;
            }
        }

        &.is-warning {
            .zr-step-line-inner {
                width: 100%;
                background-color: $warning;
            }

            .zr-step-icon-warp {
                border-color: $warning;

                .icon {
                    fill: $warning !important;
                }
            }

            .zr-step-main {
                color: $warning;
            }
        }

        &.is-error {
            .zr-step-line-inner {
                width: 100%;
                background-color: $error;
            }

            .zr-step-icon-warp {
                border-color: $error;

                .icon {
                    fill: $error !important;
                }
            }

            .zr-step-main {
                color: $error;
            }
        }

        &.is-primary {
            .zr-step-line-inner {
                width: 100%;
                background-color: $primary;
            }

            .zr-step-icon-warp {
                border-color: $primary;

                .icon {
                    fill: $primary !important;
                }
            }

            .zr-step-main {
                color: $primary;
            }
        }
    }
}
</style>