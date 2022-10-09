import { defineStore } from "pinia";
import { RoutinesApi } from "@/api/routines";
import router from "@/router";

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
    async setRoutines() {
      try {
      const res   = await RoutinesApi.getAllRoutines();
      this.routines = res.content;
      } catch (error) {
        console.log(error);
        router.push("/erroPage");
      }
      console.log(this.routines);
    },
  },
});
