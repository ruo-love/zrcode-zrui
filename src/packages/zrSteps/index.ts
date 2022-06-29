import zrSteps from './zrSteps.vue'
import zrStep from './components/zrStep.vue'
export default {
    install: (app: any) => {

        app.component(zrSteps.name, zrSteps)
            .component(zrStep.name, zrStep)
    }
}