import zrCascader from './zrCascader.vue'
export default {
    install: (app: any) => {
        app.component(zrCascader.name, zrCascader)
    }
}