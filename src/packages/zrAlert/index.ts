import zrAlert from './zrAlert.vue'
//将组件注册为插件 导出
export default {
    install: (app: any) => {
        app.component(zrAlert.name, zrAlert)
    }
}