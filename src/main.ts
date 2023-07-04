import { createApp } from "vue"
import App from "./App.vue"
import routes from "./router/index"
import ZRUI from "@zrcode/zrui"
import "@zrcode/zrui/dist/style.css"

// import ZRUI from './packages/index'

import "./assets/normal.scss"
import showCode from "./components/showCode/index.vue"
const app = createApp(App)

app.use(routes).use(ZRUI).component(showCode.name, showCode).mount("#app")
