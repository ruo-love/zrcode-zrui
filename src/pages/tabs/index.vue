<template>
    <div>
        <zr-tabs v-model="value" @tab_click="change" type="card">
            <zr-tab-pane name="first" label="用户管理">用户管理11</zr-tab-pane>
            <zr-tab-pane name="second" label="配置管理">配置管理22</zr-tab-pane>
            <zr-tab-pane name="third" label="角色管理">角色管理33</zr-tab-pane>
            <zr-tab-pane name="fourth" label="定时任务补偿">定时任务补偿44</zr-tab-pane>
        </zr-tabs>
    </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";


const value = ref('fourth')
const change = (target: any) => {
    console.log(target)
    console.log(value.value)
}
</script>