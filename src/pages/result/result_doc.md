<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import DiyResult from './demos/DiyResult.vue';
</script>

## <font color=#e55472>Result 结果</font>

<font color=#5e6d82>用于对用户的操作结果或者异常状态做反馈。</font>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>可以设置不同的类型状态</font>

<BaseUse/>

### <font color=#5e6d82>自定义</font>

<font color=#5e6d82>通过 title sub_title 属性设置标题、副标题</font>

<br>
<font color=#5e6d82>通过 默认插槽 extra插槽 设置头部区域、尾部区域</font>

<DiyResult/>
