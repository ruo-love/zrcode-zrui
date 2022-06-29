import zrBreadcrumb from './zrBreadcrumb.vue'
import zrBreadcrumbItem from './components/zrBreadcrumbItem.vue'
export default {
    install: (app: any) => {
        app.component(zrBreadcrumb.name, zrBreadcrumb)
            .component(zrBreadcrumbItem.name, zrBreadcrumbItem)
    }
}