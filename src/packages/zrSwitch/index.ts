import zrSwitch from './zrSwitch.vue'
export default {
    install: (app: any) => {
        app.component(zrSwitch.name, zrSwitch)
    }
}