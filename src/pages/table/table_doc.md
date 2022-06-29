<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import StripeTable from './demos/StripeTable.vue'//斑马纹
import BorderTable from './demos/BorderTable.vue'//表格边框
import StatusTable from './demos/StatusTable.vue';//状态表格
import FixedTable from './demos/FixedTable.vue';//固定表格
</script>

## <font color=#e55472>Table 表格</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>Table 表格基础用法。</font>

<BaseUse/>

### <font color=#5e6d82>Table 表格携带斑马纹用法</font>

<font color=#5e6d82>stripe 属性开启斑马纹 默认为 true</font>

<StripeTable/>

### <font color=#5e6d82>表格边框</font>

<font color=#5e6d82>border 属性开启表格 默认为 false</font>

<BorderTable/>

### <font color=#5e6d82>不同状态的表格</font>

<font color=#5e6d82>row_class_name 属性 结束一个函数，参数为{row,rowIndex} 可以返回 4 种不同的状态</font>

<font color=#5e6d82>default-row 默认状态</font>
<br>
<font color=#5e6d82>success-row 成功状态</font>
<br>
<font color=#5e6d82>warning-row 警告状态</font>
<br>
<font color=#5e6d82>error-row 失败状态</font>

<StatusTable/>

### <font color=#5e6d82>固定表格头部</font>

<font color=#5e6d82>fixed 属性 固定头部</font>

<FixedTable/>
