<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import MessageType from './demos/MessageType.vue'//类型
import HtmlMessage from './demos/HtmlMessage.vue'//html
</script>

## <font color=#e55472>Message 消息弹框</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>Message 基础用法。</font>
<font color=#5e6d82>duration 设置显示时间 message 设置显示文本</font>

<BaseUse/>

### <font color=#5e6d82>不同状态</font>

<font color=#5e6d82>Message 用来显示「成功、警告、消息、错误」类的操作反馈。</font>

<MessageType/>

### <font color=#5e6d82>使用 HTML 片段</font>

<font color=#5e6d82>message 属性支持传入 HTML 片段</font>

<font color=#5e6d82>将 dangerouslyUseHTMLString 属性设置为 true，message 就会被当作 HTML 片段处理。</font>

<HtmlMessage/>

### <font color=#5e6d82>全局 api 使用</font>

<font color=#5e6d82> this.$zrMessage()</font>
