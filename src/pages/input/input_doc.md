<script setup>
import BaseUse from './demos/BaseUse.vue'//基本使用
import DisabledInput from './demos/DisabledInput.vue' //DisabledInput
import TypeInput from './demos/TypeInput.vue'//TypeInput
import ClearableInput from './demos/ClearableInput.vue'//ClearableInput
import IconInput from './demos/IconInput.vue'//IconInput
import LimitInput from './demos/LimitInput.vue'//LimitInput
</script>

## <font color=#e55472>zr Input 输入框</font>

<font color=#5e6d82>zr-Input 为受控组件，它总会显示 Vue 绑定值</font>

### <font color=#e55472>基本方法</font>

<font color=#5e6d82>直接通过设置 v-model 绑定数据</font>

<BaseUse/>

### <font color=#e55472> 禁用 </font>

<font color=#5e6d82>直接通过设置 disabled 属性</font>

<DisabledInput/>

### <font color=#e55472> 输入框类型控制 </font>

<font color=#5e6d82>直接通过设置 type 属性</font>

<TypeInput/>

### <font color=#e55472> 可一键清空</font>

<font color=#5e6d82>直接通过设置 clearable 属性 </font>

<ClearableInput/>

### <font color=#e55472>设置携带 Icon 图标</font>

<font color=#5e6d82>直接通过设置 icon 属性 </font>

<IconInput/>

### <font color=#e55472>限制输入框输入长度</font>

<font color=#5e6d82>直接通过设置 min max 属性 </font>

<LimitInput/>
