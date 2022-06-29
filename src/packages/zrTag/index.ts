import zrTag from './zrTag.vue';
export default {
    install: (app: any) => {
        app.component(zrTag.name, zrTag)
    }
}