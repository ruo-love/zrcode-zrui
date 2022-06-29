import zrProgress from './zrProgress.vue';
export default {
    install: (app: any) => {
        app.component(zrProgress.name, zrProgress)
    }
}