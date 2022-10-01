// store.js
import { reactive } from "vue";

export const store = reactive({
  loggedIn: false,
  setLoggedIn() {
    this.loggedIn = true;
  },
});
