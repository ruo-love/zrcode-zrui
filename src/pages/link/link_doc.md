<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import LinkDisabled from './demos/LinkDisabled.vue'//禁用
import LinkUnderline from './demos/LinkUnderline.vue'//下划线
import LinkIcon from './demos/LinkIcon.vue'//下划线
</script>

## <font color=#e55472>文字超链接</font>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>基础的文字链接用法。</font>

<BaseUse/>

### <font color=#5e6d82>禁用状态</font>

<font color=#5e6d82>文字链接不可用状态。</font>
<LinkDisabled/>

### <font color=#5e6d82>有无下划线</font>

<font color=#5e6d82>underline 属性控制是否添加下划线</font>
<LinkUnderline/>

### <font color=#5e6d82>添加 Icon 图标</font>

<font color=#5e6d82>icon_left icon_right 设置 icon 图标名称</font>

<font color=#5e6d82>icon_left_color icon_right_color 设置 icon 图标颜色</font>
<LinkIcon/>
