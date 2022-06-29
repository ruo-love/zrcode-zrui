import zrTable from './zrTable.vue';
import zrTableColumn from './components/zrTableColumn.vue'
import zrTableTh from './components/zrTableTh.vue'
import zrTableTr from './components/zrTableTr.vue'
export default {
    install: (app: any) => {
        app.component(zrTable.name, zrTable)
        app.component(zrTableColumn.name, zrTableColumn)
        app.component(zrTableTh.name, zrTableTh)
        app.component(zrTableTr.name, zrTableTr)
    }
}
