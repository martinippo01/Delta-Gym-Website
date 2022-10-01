<template>
  <v-app-bar color="background" elevation="0">
    <router-link to="/">
      <v-img
        max-height="60"
        max-width="60"
        src="@/assets/Logo.png"
        class="ma-3 position-absolute top-100 start-100 translate-middle"
      ></v-img>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
      class="ma-3 position-absolute top-0 start-100 translate-middle"
      :color="select === 'explore' ? 'primary' : 'topBar'"
      plain
    >
      <router-link to="/explore"> EXPLORE </router-link>
    </v-btn>
    <v-btn
      class="ma-3 position-absolute top-0 start-100 translate-middle"
      :color="select === 'myRoutines' ? 'primary' : 'topBar'"
      plain
    >
      <router-link to="/myRoutines"> MY ROUTINES </router-link>
    </v-btn>
    <v-btn
      class="ma-3 position-absolute top-0 start-100 translate-middle"
      :color="select === 'profile' ? 'primary' : 'topBar'"
      plain
    >
      <router-link to="/profile">
        <v-icon>mdi-account-circle-outline</v-icon>
      </router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
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
};
</script>

<style scoped></style>
