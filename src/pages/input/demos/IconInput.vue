<template>
    <div>
        <zr-Input v-model="value" icon="sousuo"></zr-Input>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref()
const code = `
<zr-Input v-model="value" icon="sousuo"></zr-Input>

import { ref } from "@vue/reactivity";
const value = ref()
`
</script>