import { createApp } from "vue";
import App from "./App.vue"; 
import router from "./router";

import "./styles.css";
import 'primeicons/primeicons.css'
import '@fortawesome/fontawesome-free/css/all.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).mount("#app");
