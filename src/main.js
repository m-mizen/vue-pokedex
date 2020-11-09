const { createApp } = require("vue");
import App from "./App.vue";

import router from "./router";

const app = createApp(App).mount("#app");

app.use(router);
