import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import routes from "./routes";
import store from "./store";


const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App);


app.use(router);
app.use(store);

app.mount('#app')
