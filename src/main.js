import Vue from "vue";
import Meta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setAuthorizationToken from "./utils/setAuthorizationToken";

if (localStorage.getItem("jwtToken")) {
  setAuthorizationToken(localStorage.getItem("jwtToken"));
}

Vue.use(Meta);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
