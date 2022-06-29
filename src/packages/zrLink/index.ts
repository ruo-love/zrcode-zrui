import zrLink from './zrLink.vue'
//将组件注册为插件 导出

export default {
    install: (app: any) => {
        app.component(zrLink.name, zrLink)
    }
}