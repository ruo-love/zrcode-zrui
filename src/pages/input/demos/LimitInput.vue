<template>
    <div>
        <zr-Input v-model="value" :min="2" :max="10"></zr-Input>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref('zrui')
const code = `
<zr-Input v-model="value":min="2" :max="10"></zr-Input>

import { ref } from "@vue/reactivity";
const value = ref()
`
</script>