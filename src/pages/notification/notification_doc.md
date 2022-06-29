<script setup>
import BaseUse from './demos/BaseUse.vue';
import TypeNotify from './demos/TypeNotify.vue'
import Direction from './demos/Direction.vue'
import HtmlModel from './demos/HtmlModel.vue'
</script>

## <font color=#e55472>Notification</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>支持自动关闭 或 手动关闭，当 duration 为 0 即为一直显示，除非手动关闭</font>

<BaseUse/>

<br>

### <font color=#5e6d82>不同状态</font>

<font color=#5e6d82>Notify 用来显示「成功、警告、消息、错误」类的操作反馈。</font>

<TypeNotify/>

### <font color=#5e6d82>自定义弹出位置</font>

<font color=#5e6d82>可以让 Notification 从屏幕四角中的任意一角弹出</font>

<Direction/>
<br>

### <font color=#5e6d82>支持 HTML 片段</font>

<font color=#5e6d82>设置 html 属性为 true</font>

<HtmlModel/>

<font color=#5e6d82>Notification 依然支持全局 Api this.$Notify</font>
