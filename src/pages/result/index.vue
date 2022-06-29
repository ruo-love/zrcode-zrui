<template>
    <div class="demo-container">
        <zr-result @callback="callback"></zr-result>
        <zr-result type="warning"></zr-result>
        <zr-result type="error"></zr-result>
        <zr-result type="info">
            <zr-icon name="kaoqindaka" color="#41b883" :size="52"></zr-icon>
            <template #extra>
                <zr-button types="success" icon="upload">
                    Back
                </zr-button>
            </template>
        </zr-result>
    </div>
</template>
<script lang="ts" setup>
const callback = () => {

}
</script>
<style scoped>
.demo-container {

    display: flex;
    justify-content: space-around;
}
</style>