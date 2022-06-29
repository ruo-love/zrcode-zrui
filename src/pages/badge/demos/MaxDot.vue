<template>
    <div style="margin-top:20px">
        <zr-badge is_dot value=1>
            <zr-button round></zr-button>
        </zr-badge>
        <zr-badge value="30" max="20" type="success">
            <zr-button round></zr-button>
        </zr-badge>
        <zr-badge value="20" max="10" type="warning">
            <zr-button round></zr-button>
        </zr-badge>

        <zr-badge is_dot value="4" type="info">
            <zr-button round></zr-button>
        </zr-badge>
        <zr-badge value="100" type="error">
            <zr-button round></zr-button>
        </zr-badge>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-badge is_dot value=1>
        <zr-button round></zr-button>
    </zr-badge>
    <zr-badge value="30" max="20" type="success">
        <zr-button round></zr-button>
    </zr-badge>
    <zr-badge value="20" max="10" type="warning">
        <zr-button round></zr-button>
    </zr-badge>

    <zr-badge is_dot value="4" type="info">
        <zr-button round></zr-button>
    </zr-badge>
    <zr-badge value="100" type="error">
        <zr-button round></zr-button>
    </zr-badge>
</div>
 
`
</script>

<style scoped>
</style>