import { UpdatableCredentials, UserApi } from "@/api/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
   state: () => {
    return {
      email: "" as string,
    }
  },
  getters: {
    getEmail(): string {
      return this.email;
    },
  },
  actions: {
    addEmail(email: string): void {
      this.email = email;
    },
    updateUser(credentials: UpdatableCredentials) {
        UserApi.updateUser(credentials)
    }
  },
});
