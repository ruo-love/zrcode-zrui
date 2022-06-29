<template>
    <div>
        <zr-progress color="red"></zr-progress>
        <zr-progress color="#292d3e" :percentage="80"></zr-progress>
        <zr-progress color="#0288d1" :percentage="70"></zr-progress>
        <zr-progress color="#ff7043" :percentage="20"></zr-progress>
        <zr-progress color="#ffdb46" :percentage="100"></zr-progress>
    </div>
    <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const code = `
<zr-progress color="red"></zr-progress>
<zr-progress color="#292d3e" :percentage="80"></zr-progress>
<zr-progress color="#0288d1" :percentage="70"></zr-progress>
<zr-progress color="#ff7043" :percentage="20"></zr-progress>
<zr-progress color="#ffdb46" :percentage="100"></zr-progress>
`
</script>