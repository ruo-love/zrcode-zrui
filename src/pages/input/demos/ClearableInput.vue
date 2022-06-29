<template>
    <div>
        <zr-Input v-model="value" type="text" clearable></zr-Input>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref('可清空的文本')
const code = `
 <zr-Input v-model="value" type="text"></zr-Input>

import { ref } from "@vue/reactivity";
const value = ref('可清空的文本')
`
</script>