<script setup>
 import BaseUse from './demos/BaseUse.vue'//基础的按钮用法
import ThemeAlert from './demos/ThemeAlert.vue';
import IconAlert from './demos/IconAlert.vue';
import closeAlert from './demos/closeAlert.vue';
import centerAlert from './demos/centerAlert.vue';
import DescriptionAlert from './demos/DescriptionAlert.vue';
</script>

## <font color=#e55472>Alert 提示</font>

### <font color=#e55472>基础用法</font>

<font color=#5e6d82>title 属性可以设置显示文本</font>
<br>

<BaseUse/>

### <font color=#e55472>主题</font>

<font color=#5e6d82>Alert 组件提供了两个不同的主题：light 和 dark。</font>

<ThemeAlert/>

### <font color=#e55472>icon</font>

<font color=#5e6d82>添加 icon 属性 开启前缀 icon 图标</font>

<IconAlert/>

### <font color=#e55472>自定义关闭按钮</font>

<font color=#5e6d82>默认插槽为关闭按钮插槽</font>

<closeAlert/>

### <font color=#e55472>居中显示</font>

<font color=#5e6d82>center 属性开启居中显示</font>

<centerAlert/>

### <font color=#e55472>辅助文字</font>

<font color=#5e6d82>description 属性设置辅助文本</font>

<DescriptionAlert/>
