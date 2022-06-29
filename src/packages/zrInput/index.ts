import zrInput from './zrInput.vue'
//将组件注册为插件 导出

export default {
    install: (app: any) => {
        app.component(zrInput.name, zrInput)
    }
}