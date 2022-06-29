<script setup>
import Ways from './demos/Ways.vue'//基本用法
import Diy from './demos/Diy.vue'
import Close from './demos/Close.vue'
</script>

## <font color=#e55472>Loading</font>

<br>

### <font color=#5e6d82>Loading 两种用法</font>

<font color=#5e6d82>支持全局指令 和 全局服务</font>

<Ways/>

### <font color=#5e6d82>自定义 Loading</font>

<font color=#5e6d82>支持自定义配置 title icon duration color backgroundColor</font>

<Diy/>

### <font color=#5e6d82>手动关闭 Loading</font>

<font color=#5e6d82>服务类型的 Loading 支持手动关闭，当传递 show 属性为 true 则会一直显示 loading</font>
<br>
<font color=#5e6d82>showZrLoading 函数返回一个函数 调用该函数可以关闭 loading</font>

<Close/>
