<script setup>
 import BaseUse from './demos/BaseUse.vue'//基础的按钮用法
 import ButtonStatus from './demos/ButtonStatus.vue'//主色
 import ButtonPlain from './demos/ButtonPlain.vue'//plain
 import ButtonRound from './demos/ButtonRound.vue'//round
 import ButtonCircle from './demos/ButtonCircle.vue'//circle
 import ButtonDisabled from './demos/ButtonDisabled.vue'//disabled
 import ButtonSize from './demos/ButtonSize.vue'//size
 import ButtonIcon from './demos/ButtonIcon.vue'//icon
</script>

## <font color=#e55472>Button 按钮</font>

<font color=#5e6d82>常用的操作按钮。</font>

### <font color=#e55472>基础用法</font>

基础的按钮用法
<BaseUse/>

### <font color=#e55472>按钮状态</font>

<font color=#5e6d82>按钮不同的状态表现 types 属性 primary、success、info、error、warning。</font>
<ButtonStatus/>

### <font color=#e55472>镂空按钮</font>

<font color=#5e6d82>镂空按钮没有背景色 plain 属性 接受一个布尔值。</font>
<ButtonPlain/>

### <font color=#e55472>圆角按钮</font>

<font color=#5e6d82>更加圆润的按钮 round 属性 接受一个布尔值。</font>
<ButtonRound/>

### <font color=#e55472>圆形按钮</font>

<font color=#5e6d82>圆形按钮的不同展示 circle 属性 接受一个布尔值。</font>
<ButtonCircle/>

### <font color=#e55472>禁用状态</font>

<font color=#5e6d82>按钮不可用状态 disable 属性 接受一个布尔值。</font>
<ButtonDisabled/>

### <font color=#e55472>按钮大小</font>

<font color=#5e6d82>size 属性:设置按钮的不同大小 mini small medium,默认 small。</font>
<ButtonSize/>

### <font color=#e55472>带 Icon 图标按钮</font>

<font color=#5e6d82>icon 属性:设置按钮的 icon 图标 icon_color 设置按钮图标的颜色</font>
<ButtonIcon/>
