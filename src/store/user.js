// store.js
import { reactive } from "vue";

export const store = reactive({
  loggedIn: false,
  setLoggedIn() {
    this.loggedIn = true;
  },
  currentRoutine:{warpUpExercise:new Map(),mainSetExercise:new Map(),coolDownExercise: new Map()},
  addExercise(exerciseId,name){
    this.currentRoutine.coolDownExercise.set(exerciseId,name);
  },
  getExercises(){
    return this.currentRoutine.coolDownExercise.get(3);
  }
});
