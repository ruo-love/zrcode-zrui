<template>
    <div>
        <zr-steps :active="active" finish_status="primary" direction="vertical">
            <zr-step></zr-step>
            <zr-step icon="edit"></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
        </zr-steps>
        <zr-steps :active="active" finish_status="success">
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
        </zr-steps>
        <zr-steps :active="active" finish_status="warning">
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
        </zr-steps>
        <zr-steps :active="active" finish_status="error">
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
        </zr-steps>

        <button @click="add">+++1</button>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";

const active = ref(0)
const add = () => {
    if (active.value >= 5) {
        active.value = 0
        return
    }
    active.value++
}
</script>