<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import Confirm from './demos/Confirm.vue'
import Prompt from './demos/Prompt.vue'
import HtmlWay from './demos/HtmlWay.vue'
</script>

## <font color=#e55472>MessageBox</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82> 基础用法用法支持$toAlert()全局 api 和按需引入 toAlert</font>

<BaseUse/>
<br>

### <font color=#5e6d82>toConfirm 确认弹框</font>

<font color=#5e6d82>可以设置确认、取消回调</font>

<Confirm/>
<br>

### <font color=#5e6d82>toPrompt 提交内容</font>

<font color=#5e6d82>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</font>

<Prompt/>
<br>

### <font color=#5e6d82>支持 HTML 片段</font>

<font color=#5e6d82>设置 html 属性为 true</font>

<HtmlWay/>
