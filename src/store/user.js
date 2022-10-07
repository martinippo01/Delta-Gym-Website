// store.js
import { reactive } from "vue";

export const store = reactive({
  loggedIn: false,
  setLoggedIn() {
    this.loggedIn = true;
  },
  currentRoutine:{warpUpExercise:new Map(),mainSetExercise:new Map(),coolDownExercise: new Map()},

  getExercises(){
    return this.currentRoutine.coolDownExercise.get(3);
  }
});
