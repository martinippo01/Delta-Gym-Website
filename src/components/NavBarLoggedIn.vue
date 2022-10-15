<template>
  <v-app-bar color="background" elevation="0">
    <router-link style="text-decoration: none; color: inherit" to="/">
      <v-img
        max-height="60"
        max-width="60"
        src="@/assets/Logo.png"
        class="ma-3 position-absolute top-100 start-100 translate-middle"
      ></v-img>
    </router-link>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; color: inherit" to="/explore">
      <v-btn
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        :color="select === 'explore' ? 'primary' : 'topBar'"
        plain
      >
          EXPLORE
      </v-btn>
    </router-link>

    <router-link
      style="text-decoration: none; color: inherit"
      to="/myRoutines"
    >
      <v-btn
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        :color="select === 'myRoutines' ? 'primary' : 'topBar'"
        plain
      >
          MY ROUTINES

      </v-btn>
    </router-link>
    <router-link style="text-decoration: none; color: inherit" to="/profile">
    <v-btn
      class="ma-3 position-absolute top-0 start-100 translate-middle"
      :color="select === 'profile' ? 'primary' : 'topBar'"
      plain
    >
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>
    </router-link>

    <v-btn
      class="ma-3 position-absolute top-0 start-100 translate-middle"
      :color="'topBar'"
      plain
      @click="handleLogout()"
    >
      <div style="text-decoration: none; color: inherit">LOG OUT</div>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useSecurityStore } from "@/store/securityStore";
import router from "@/router";
import { mapActions } from "pinia";

export default {
  name: "MainTopBar",
  props: {
    select: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useSecurityStore, ["logout"]),
    async handleLogout() {
      try {
        await this.logout();
        router.push("/");
      } catch (error) {
        router.push("/errorPage");
      }
    },
  },
};
</script>

<style scoped></style>
