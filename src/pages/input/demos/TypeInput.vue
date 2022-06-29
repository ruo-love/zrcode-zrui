<template>
    <div>
        <div class="input-container">
            <zr-Input v-model="value1" type="text"></zr-Input>
            <zr-Input v-model="value2" type="password"></zr-Input>
            <zr-Input v-model="value3" type="number"></zr-Input>
            <zr-Input v-model="value4" type="textarea"></zr-Input>
        </div>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value1 = ref()
const value2 = ref()
const value3 = ref(3)
const value4 = ref()
const code = `
<div>
    <zr-Input v-model="value1" type="text"></zr-Input>
    <zr-Input v-model="value2" type="password"></zr-Input>
    <zr-Input v-model="value3" type="number"></zr-Input>
    <zr-Input v-model="value4" type="textarea"></zr-Input>
</div>

import { ref } from "@vue/reactivity";
const value1 = ref()
const value2 = ref()
const value3 = ref(3)
const value4 = ref()
`
</script>

<style lang="scss" scoped>
.input-container {
    .zr-input-box {
        margin: 0 10px;
        vertical-align: middle;
    }
}
</style>