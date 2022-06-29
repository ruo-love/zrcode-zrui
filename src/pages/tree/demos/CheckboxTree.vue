<template>
    <div>
        <zr-tree :data="data" show_checkbox :change="loadNode"></zr-tree>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity"
const loadNode = (label:any, item:any) => {
    // console.log(item, item)
}

const data = ref([{
    label: '一级 1',
    children: [{
        label: '二级 1-1',
        children: [{
            label: '三级 1-1-1'
        }]
    }]
}, {
    label: '一级 2',
    children: [{
        label: '二级 2-1',
        children: [{
            label: '三级 2-1-1'
        }]
    }, {
        label: '二级 2-2',
        children: [{
            label: '三级 2-2-1'
        }]
    }]
}, {
    label: '一级 3',
    children: [{
        label: '二级 3-1',
        children: [{
            label: '三级 3-1-1'
        }]
    }, {
        label: '二级 3-2',
        children: [{
            label: '三级 3-2-1'
        }]
    }]
}])

const code = `
<zr-tree :data="data" show_checkbox :change="loadNode"></zr-tree>

const loadNode = (label, item) => {
    console.log(item, item)
}

 const data = ref([{
    label: '一级 1',
    children: [{
        label: '二级 1-1',
        children: [{
            label: '三级 1-1-1'
        }]
    }]
}, {
    label: '一级 2',
    children: [{
        label: '二级 2-1',
        children: [{
            label: '三级 2-1-1'
        }]
    }, {
        label: '二级 2-2',
        children: [{
            label: '三级 2-2-1'
        }]
    }]
}, {
    label: '一级 3',
    children: [{
        label: '二级 3-1',
        children: [{
            label: '三级 3-1-1'
        }]
    }, {
        label: '二级 3-2',
        children: [{
            label: '三级 3-2-1'
        }]
    }]
}])
`
</script>