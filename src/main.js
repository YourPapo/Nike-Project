import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./style.css";
import router from "./router";

store.dispatch("autoLogin");

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
