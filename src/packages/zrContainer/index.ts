import zrContainer from './zrContainer.vue'
import zrHeader from './components/zrHeader.vue'
import zrFooter from './components/zrFooter.vue'
import zrMain from './components/zrMain.vue'
import zrAside from './components/zrAside.vue'
//将组件注册为插件 导出
export default {
    install: (app: any) => {
        app.component(zrContainer.name, zrContainer)
            .component(zrHeader.name, zrHeader)
            .component(zrFooter.name, zrFooter)
            .component(zrMain.name, zrMain)
            .component(zrAside.name, zrAside)
    }
}