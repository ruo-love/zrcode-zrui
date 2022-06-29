<template>
    <div>
        <zr-progress status="primary" :format="format"></zr-progress>
        <zr-progress :percentage="100" status="success" :format="format"></zr-progress>
        <zr-progress :percentage="70" status="info" :format="format"></zr-progress>
        <zr-progress :percentage="20" status="error" :format="format"></zr-progress>
        <zr-progress :percentage="100" status="warning" :format="format"></zr-progress>
    </div>
</template>
<script lang="ts" setup>
const format = (percentage: number) => {
    return percentage === 100 ? '满' : `${percentage}%`;
}
</script>