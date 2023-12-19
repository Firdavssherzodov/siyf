import "./assets/main.css";

import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/mdc-light-deeppurple/theme.css";

import Ripple from "primevue/ripple";

import Vue3Marquee from "vue3-marquee";

import FocusTrap from "primevue/focustrap";

const app = createApp(App);

app.directive("focustrap", FocusTrap);
app.directive("ripple", Ripple);

app.use(createPinia());
app.use(Vue3Marquee);
app.use(PrimeVue, { ripple: true });
app.use(router);

app.mount("#app");
