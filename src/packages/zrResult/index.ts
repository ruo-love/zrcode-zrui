import zrResult from './zrResult.vue'
export default {
    install: (app: any) => {
        app.component(zrResult.name, zrResult)
    }
}