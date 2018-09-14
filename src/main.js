import Vue from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/App.vue";

import "@/plugins/registerServiceWorker";
import "@/plugins/buefy";
import "@/assets/styles/main.styl";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
