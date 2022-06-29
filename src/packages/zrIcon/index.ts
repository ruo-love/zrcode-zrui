import zrIcon from './zrIcon.vue'
//将组件注册为插件 导出
import '../public/fonts/iconfont.js'
export default {
    install: (app: any) => {
        app.component(zrIcon.name, zrIcon)
    }
}