<template>
  <v-app-bar color="background"
      elevation="0"
  >
    <v-img
        max-height="60"
        max-width="60"
        src="@/assets/Logo.png"
        class="ma-3 position-absolute top-100 start-100 translate-middle"
    ></v-img>
    <v-spacer></v-spacer>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="topBar"
        plain
    >
      EXPLORE
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="topBar"
        plain
    >
      SING UP
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        color="primary"
        plain
    >
      LOG IN
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>