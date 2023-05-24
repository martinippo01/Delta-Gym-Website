import { UpdatableCredentials, UserApi } from "@/api/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
   state: () => {
    return {
      email: "" as string,
      allUsersRoutines: [],
      userId: -1,
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
    },
    async getUserId(){
      const res = await UserApi.get();
      this.userId = res.id;
      return res.id;
    }
  },
});
