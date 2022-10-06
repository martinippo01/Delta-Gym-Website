import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false;

new Vue({
  vuetify /* esto me define que se utiliza a la libreria vuetify! */,
  router,
  pinia,
  render: (h) => h(App)
}).$mount("#app");

/* aca viene a trabajar Vue directamente, le dice renderizar el componente App definido en App.vue
 * en el componenete con id "app" (definido en index.html). Es analogo a React y el ReactDOM. render() */
