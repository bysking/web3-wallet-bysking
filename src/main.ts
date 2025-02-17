import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Button } from "vant";
import "vant/lib/index.css";

createApp(App).use(Button).mount("#app");
