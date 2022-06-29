import zrBadge from './zrBadge.vue';
export default {
    install: (app: any) => {
        app.component(zrBadge.name, zrBadge)
    }
}