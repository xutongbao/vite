import { createApp } from "vue"
import { locale } from "element-plus"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./static/css/light.css"
import 'dayjs/locale/zh-cn'
import lang from 'element-plus/lib/locale/lang/zh-cn'

locale(lang)
const app = createApp(App).use(store).use(router)
app.mount("#app")
