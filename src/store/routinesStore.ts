import { defineStore } from "pinia";

export const useRoutinesStore = defineStore("routines", {
  state: () => {
    return {
      routines: [],
    };
  },
  getters: {
    getRoutines(): any {
      return this.routines;
    },
  },
  actions: {
    setRoutines(routines: []) {
      this.routines = routines;
    },
  },
});
