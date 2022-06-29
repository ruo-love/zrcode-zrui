<template>
    <div class="demo-row">
        <zr-Button types="primary" class=" demo-item" />
        <zr-Button types="success" class=" demo-item" />
        <zr-Button types="info" class=" demo-item" />
        <zr-Button types="error" class=" demo-item" />
        <zr-Button types="warning" class=" demo-item" />
    </div>
    <div class="demo-row">
        <zr-Button :plain="true" types="primary" class=" demo-item" />
        <zr-Button :plain="true" types="success" class=" demo-item" />
        <zr-Button :plain="true" types="info" class=" demo-item" />
        <zr-Button :plain="true" types="error" class=" demo-item" />
        <zr-Button :plain="true" types="warning" class=" demo-item" />
    </div>
    <div class="demo-row">
        <zr-Button :round="true" class=" demo-item" types="primary" />
        <zr-Button :round="true" class=" demo-item" types="success" />
        <zr-Button :round="true" class=" demo-item" types="info" />
        <zr-Button :round="true" class=" demo-item" types="error" />
        <zr-Button :round="true" class=" demo-item" types="warning" />
    </div>
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
    <div class="demo-row">
        <zr-Button :disabled="true" class="demo-item" types="primary" />
        <zr-Button :disabled="true" class="demo-item" types="success" />
        <zr-Button :disabled="true" class="demo-item" types="info" />
        <zr-Button :disabled="true" class="demo-item" types="error" />
        <zr-Button :disabled="true" class="demo-item" types="warning" />
    </div>
    <div class="">
        <zr-Button size="mini" class=" demo-item" types="primary" />
        <zr-Button size="small" class=" demo-item" types="primary" />
        <zr-Button size="medium" class=" demo-item" types="primary" />
    </div>
    <showCode :code="code" />
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
   <zr-Button types="primary" class=" demo-item"/>
   <zr-Button types="success" class=" demo-item"/>
   <zr-Button types="info" class=" demo-item"/>
   <zr-Button types="error" class=" demo-item"/>
   <zr-Button types="warning" class=" demo-item"/>
</div>
<div class="demo-row">
    <zr-Button :plain="true" types="primary" class=" demo-item"/>
    <zr-Button :plain="true" types="success" class=" demo-item"/>
    <zr-Button :plain="true" types="info" class=" demo-item"/>
    <zr-Button :plain="true" types="error" class=" demo-item"/>
    <zr-Button :plain="true" types="warning" class=" demo-item"/>
</div>
<div class="demo-row">
    <zr-Button :round="true" class=" demo-item" types="primary"/>
    <zr-Button :round="true" class=" demo-item" types="success"/>
    <zr-Button :round="true" class=" demo-item" types="info"/>
    <zr-Button :round="true" class=" demo-item" types="error"/>
    <zr-Button :round="true" class=" demo-item" types="warning"/>
</div>
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
<div class="demo-row">
    <zr-Button :disabled="true" class=" demo-item" types="primary" />
    <zr-Button :disabled="true" class=" demo-item" types="success" />
    <zr-Button :disabled="true" class=" demo-item" types="info" />
    <zr-Button :disabled="true" class=" demo-item" types="error" />
    <zr-Button :disabled="true" class=" demo-item" types="warning" />
</div>
<div>
    <zr-Button size="mini" class=" demo-item" types="primary" />
    <zr-Button size="small" class=" demo-item" types="primary" />
    <zr-Button size="medium" class=" demo-item" types="primary" />
</div>
`
</script>
<style>
.demo-row {
    display: flex;
}

.demo-item {
    margin: 10px;
}
</style>