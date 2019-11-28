import Vue from "vue";

import Index from "./components/Index.vue";
import store from "./store";

new Vue({
  el: "#app",
  store,
  render: h => h(Index)
});
