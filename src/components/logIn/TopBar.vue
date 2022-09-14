<template>
  <v-row justify="end">
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
  </v-row>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>