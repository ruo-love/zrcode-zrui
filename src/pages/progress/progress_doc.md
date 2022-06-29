<script setup>
import BaseUse from './demos/BaseUse.vue'//基本用法
import InsideProgress from './demos/InsideProgress.vue'//内嵌文字
import ColorProgress from './demos/ColorProgress.vue'//自定义颜色
import FormatProgress from './demos/FormatProgress.vue'//FormatProgress
import CircleProgress from './demos/CircleProgress.vue'//CircleProgress
</script>

## <font color=#e55472>进度条</font>

<br>

### <font color=#5e6d82>基础用法</font>

<font color=#5e6d82>基础的进度条用法。</font>

<BaseUse/>

### <font color=#5e6d82>百分比内显</font>

<font color=#5e6d82>百分比不占用额外控件，适用于文件上传等场景。text_inside 属性控制</font>

<InsideProgress/>

### <font color=#5e6d82>自定义进度条颜色</font>

<font color=#5e6d82>可以通过 color 设置进度条的颜色，color 可以接受颜色字符串</font>

<ColorProgress/>

### <font color=#5e6d82>自定义进度文本</font>

<font color=#5e6d82>format 可以接受一个函数，接受 percentage 参数</font>

<FormatProgress/>
<br>

### <font color=#5e6d82>环形进度</font>

<font color=#5e6d82>type 属性设置为 circle</font>

<CircleProgress/>
