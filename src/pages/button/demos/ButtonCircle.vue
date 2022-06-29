<template>
    <div>
        <div class="demo-row">
            <zr-Button :circle="true" class=" demo-item" types="primary">
                ZR
            </zr-Button>
            <zr-Button :circle="true" class=" demo-item" types="success">
                ZR
            </zr-Button>
            <zr-Button :circle="true" class=" demo-item" types="info">
                ZR
            </zr-Button>
            <zr-Button :circle="true" class=" demo-item" types="error">
                ZR
            </zr-Button>
            <zr-Button :circle="true" class=" demo-item" types="warning">
                ZR
            </zr-Button>
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
    <zr-Button :circle="true" class=" demo-item" types="primary">
        ZR
    </zr-Button>
    <zr-Button :circle="true" class=" demo-item" types="success">
        ZR
    </zr-Button>
    <zr-Button :circle="true" class=" demo-item" types="info">
        ZR
    </zr-Button>
    <zr-Button :circle="true" class=" demo-item" types="error">
        ZR
    </zr-Button>
    <zr-Button :circle="true" class=" demo-item" types="warning">
        ZR
    </zr-Button>
</div>
`
</script>