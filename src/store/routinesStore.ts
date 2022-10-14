import { defineStore, mapActions } from "pinia";
import { RoutinesApi } from "@/api/routines";
import { useUserStore } from "@/store/user";
import router from "@/router";

export const useRoutinesStore = defineStore("routines", {
  state: () => {
    return {
      routines: [],
      page:0,
      maxPage:0,
      minPage: 0,
    };
  },
  getters: {
    getRoutines(): any {
      return this.routines;
    },
  },
  actions: {
    async setRoutines(userId: number) {
        const res = await RoutinesApi.getAllUsersRoutines(userId, this.page, 11);
        this.routines = res.content;
        this.maxPage = Math.floor(res.totalCount / 11);
    },
    async nextPage(userId: number){
        if (this.page < this.maxPage){
          this.page++;
          await this.setRoutines(userId);
        }
    },
    async previousPage(userId: number){
      if (this.page > this.minPage){
        this.page--;
        await this.setRoutines(userId);
      }
    },
    async resetStore(){
      this.page = 0;
      this.maxPage = 0;
      this.routines = [];
    },
    async deleteRoutine(routineId: number){
      const res = await RoutinesApi.deleteRoutines(routineId);
      console.log(res);
    },

  },

});
