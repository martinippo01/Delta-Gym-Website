<template>
  <nav>
  <v-app-bar color="background"
      elevation="0"
  >
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
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="topBar"
        plain
    >
      <router-link to="/explore">
      EXPLORE
      </router-link>
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="topBar"
        plain
    >
      <router-link to="/signup">
      SING UP
      </router-link>
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="primary"
        plain
    >
      <router-link to="/login">
      LOG IN
      </router-link>
    </v-btn>

  </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>