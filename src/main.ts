import { createApp } from "vue";
import App from "./App.vue";

import "virtual:windi.css";

import Antdv from "./plugins/antdv";

const app = createApp(App);

app.use(Antdv);

app.mount("#app");
