import zrTabs from './zrTabs.vue'
import zrTabPane from './components/zrTabPane.vue'
import zrTabContetn from './components/zrTabContetn.vue'
export default {
    install: (app: any) => {
        app.component(zrTabs.name, zrTabs)
            .component(zrTabPane.name, zrTabPane)
            .component(zrTabContetn.name, zrTabContetn)
    }
}