import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import routes from "./routes";
import store from "./store";
import i18n from "./localization";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {addDevtools} from "vuex4-devtools-helper";


const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App);


app.use(router);
app.use(store);
addDevtools(app,store);
app.use(i18n);
app.use(ElementPlus);

app.mount('#app')
