import zrSelect from './zrSelect.vue'

export default {
    install: (app: any) => {

        app.component(zrSelect.name, zrSelect)
    }
}