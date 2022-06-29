import zrTree from './zrTree.vue';
import treeItem from './components/treeItem.vue'
export default {
    install: (app: any) => {
        app.component(zrTree.name, zrTree)
            .component(treeItem.name, treeItem)
    }
}