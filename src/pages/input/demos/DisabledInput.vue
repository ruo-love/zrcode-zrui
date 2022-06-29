<template>
    <div>
        <zr-Input v-model="value" disabled></zr-Input>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref()
const code = `
<zr-Input v-model="value" disabled></zr-Input>

import { ref } from "@vue/reactivity";
const value = ref()
`
</script>