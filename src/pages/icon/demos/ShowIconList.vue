<template>
    <div class="zr-icon-container">
        <ul>
            <li v-for="icon in iconArray" :key="icon.icon_id">
                <zr-icon :name="icon.font_class" :size="32"></zr-icon>
                <span>{{ icon.font_class }}</span>
            </li>
        </ul>

    </div>
</template>
<script setup lang="ts">
import iconArray from '../index'
</script>
<style lang="scss" scoped>
.zr-icon-container {
    margin-top: 20px;

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 16.66%;
            height: 120px;
            border: 1px solid $bgc-gray;
            background-color: #fff;

            span {
                padding-top: 5px;
                color: $bgc-gray;
            }

            &:hover {

                background-color: $bgc-gray;

                span {
                    color: #fff;
                }

            }
        }
    }
}
</style>
