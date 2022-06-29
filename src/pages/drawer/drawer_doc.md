<script setup>
import BaseUse from './demos/BaseUse.vue'//基本使用
import DiyDrawer from './demos/DiyDrawer.vue'
</script>

## <font color=#e55472>Drawer 抽屉</font>

<font color=#5e6d82>有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.</font>

### <font color=#e55472>使用方法</font>

<font color=#5e6d82>呼出一个临时的侧边栏, 可以从多个方向呼出</font>
<br>

<font color=#5e6d82>需要设置 visible 属性，它的类型是 boolean,当为 true 时显示 Drawer。Drawer 分为两个部分：title 和 body，title 需要具名为 title 的 slot, 也可以通过 title 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 direction @close 可以设置关闭回调</font>

<br>
<BaseUse/>

### <font color=#e55472>自定义插槽内容</font>

<font color=#5e6d82>内置了默认插槽、title 插槽、close 插槽</font>
<br>
<DiyDrawer/>
