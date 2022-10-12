import { defineStore } from "pinia";

export const useNewExerciseStore = defineStore("newExercise", {
  state: () => {
    return {
      detail: "" as string,
      name: "" as string,
    };
  },
  getters: {
    getDetail(): string {
      return this.detail;
    },
    getName(): string {
      return this.name;
    },
  },
  actions: {
    setName(name: string): void {
      this.name = name;
    },
    setDetail(detail: string) {
      this.detail = detail;
    },
  },
});
