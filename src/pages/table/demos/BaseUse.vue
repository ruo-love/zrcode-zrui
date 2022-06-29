<template>
    <div>
        <zr-table :data="tableData" stripe>
            <zr-table-column prop="date" label="日期"></zr-table-column>
            <zr-table-column prop="name" label="姓名"></zr-table-column>
            <zr-table-column prop="address" label="地址" :width="260"></zr-table-column>
        </zr-table>
        <showCode :code="code"></showCode>
    </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity"

const tableData = ref([{
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-08',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-06',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-07',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}])

const code = `
<zr-table :data="tableData">
            <zr-table-column prop="date" label="日期"></zr-table-column>
            <zr-table-column prop="name" label="姓名"></zr-table-column>
            <zr-table-column prop="address" label="地址" :width="260"></zr-table-column>
</zr-table>

const tableData = ref([{
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-08',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-06',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-07',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}])

`
</script>