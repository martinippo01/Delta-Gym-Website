import { defineStore } from "pinia";
import { RoutinesApi } from "@/api/routines";

export const useDialogStore = defineStore("dialog", {
  state: () => {
    return {
      dialogSelectExercise: false,
      dialogCreateExercise: false
    };
  },
  getters: {

  },
  actions: {
    selectChangeState (state: boolean) {
      this.dialogSelectExercise = state
    },
    createChangeState (state: boolean) {
      this.dialogCreateExercise = state
    },

  },
});
