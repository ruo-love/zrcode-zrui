<template>
    <div>
        <div class="demo-row">
            <zr-Button class="demo-item" size="mini" icon="edit"></zr-Button>
            <zr-Button class="demo-item" size="mini" icon="delete"></zr-Button>
            <zr-Button class="demo-item" size="mini" icon="dashboard"></zr-Button>
            <zr-Button class="demo-item" size="mini" icon="music"></zr-Button>
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
  <zr-Button class="demo-item" size="mini" icon="edit"></zr-Button>
  <zr-Button class="demo-item" size="mini" icon="delete"></zr-Button>
  <zr-Button class="demo-item" size="mini" icon="dashboard"></zr-Button>
  <zr-Button class="demo-item" size="mini" icon="music"></zr-Button>
</div>
`
</script>

<style>
</style>

