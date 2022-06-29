<template>
    <div class="zr-tree-item" v-for="item in data" :key="item.label">
        <label @click="toVisiable">
            <zr-icon @click="toVisiable" :name="icon" :size="14" color="#e55472"></zr-icon>
            <input v-show="show_checkbox" type="checkbox" @change="change(item.label, item)">
            <span @click="toVisiable">{{ item.label }}</span>
        </label>
        <div v-if="item.children" class="zr-tree-group" style="display:none">
            <zrTree :data="item.children" :show_checkbox="show_checkbox" :change="change"></zrTree>
        </div>
    </div>
</template>
<script>
export default {
    name: 'treeItem',
    props: ['data', 'show_checkbox', 'change'],
    data() {
        return {
            icon: 'xiangzuo'
        }
    },
    methods: {
        toVisiable(e) {
            const groupNode = e.target.parentElement.parentElement.getElementsByClassName('zr-tree-group')[0]
            if (!groupNode) return false
            if (groupNode.style.display === 'none') {
                groupNode.style.display = 'block'
            } else {
                groupNode.style.display = 'none'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.zr-tree-item {


    label {
        cursor: pointer;
    }

    .zr-tree-group {
        padding: 4px 20px;
        transition: all 0.5;
    }
}
</style>