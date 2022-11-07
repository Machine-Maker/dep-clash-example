import { createApp } from "vue";
import { createPinia } from "pinia";
import type { V0alpha2Api } from "@ory/kratos-client/api"

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import type { AxiosResponse } from "axios";
import type { UiContainer } from "@ory/kratos-client";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const client: V0alpha2Api = null;

const flow: AxiosResponse<{ ui: UiContainer }> = await client!.getSelfServiceRecoveryFlow("", "");

app.mount("#app");
