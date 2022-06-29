<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import DisabledSelect from './demos/DisabledSelect.vue' //禁用
import DisabledOption from './demos/DisabledOption.vue' //禁用项
import ClearSelect from './demos/ClearSelect.vue' //禁用项
</script>

## <font color=#e55472>单选按钮</font>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>单选按钮基础用法。</font>

<BaseUse/>

### <font color=#5e6d82>禁用选择</font>

<font color=#5e6d82>通过设置 disabled 属性</font>

<DisabledSelect/>

### <font color=#5e6d82>设置禁用项</font>

<font color=#5e6d82>通过设置 options 中的 disabled 属性</font>

<DisabledOption/>

### <font color=#5e6d82>一键清空</font>

<font color=#5e6d82>通过设置 clearable 属性</font>

<ClearSelect/>
