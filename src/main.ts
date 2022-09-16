import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify /* esto me define que se utiliza a la libreria vuetify! */,
  render: (h) => h(App),
}).$mount("#app");

/* aca viene a trabajar Vue directamente, le dice renderizar el componente App definido en App.vue
 * en el componenete con id "app" (definido en index.html). Es analogo a React y el ReactDOM. render() */
