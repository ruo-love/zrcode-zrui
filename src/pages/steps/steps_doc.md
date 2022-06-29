<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import StatusSteps from './demos/StatusSteps.vue';
import TextSteps from './demos/TextSteps.vue';
import IconSteps from './demos/IconSteps.vue'
</script>

## <font color=#e55472>Steps 步骤条</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>Steps 步骤条基础用法。设置 active 当前进度位置</font>

<BaseUse/>

### <font color=#5e6d82>含状态步骤条</font>

<font color=#5e6d82>设置 finish_status 当前步骤条的状态类型 success warning error primary</font>

<StatusSteps/>

### <font color=#5e6d82>自定义 title description</font>

<font color=#5e6d82>设置 title description 文本属性</font>

<TextSteps/>

### <font color=#5e6d82>自定义 Icon</font>

<font color=#5e6d82>设置 icon 属性</font>

<IconSteps/>
