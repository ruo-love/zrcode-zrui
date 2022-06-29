<template>
    <div>
        <zr-table :data="tableData" :row_class_name="tableRowClassName" fixed>
            <zr-table-column prop="date" label="日期"></zr-table-column>
            <zr-table-column prop="name" label="姓名"></zr-table-column>
            <zr-table-column prop="address" label="地址" :width="260"></zr-table-column>
        </zr-table>
    </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity"
const tableRowClassName = ({ row, rowIndex }: any) => {
    if (rowIndex === 1) {
        return 'warning-row';
    } else if (rowIndex === 3) {
        return 'success-row';
    } else if (rowIndex === 5) {
        return 'error-row';
    }
    return '';
}
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
</script>