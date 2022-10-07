<template>
  <div>
    <v-card
      style="border-style: 'dotted'"
      class="box"
      color="secondary"
      rounded="xl"
      width="300"
      height="200"
    >
      <v-icon color="primary" class="center"> mdi-plus </v-icon>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "add-routine",
};
</script>

<style scoped>
h1 {
  font-family: "Bebas Neue";
  color: white;
}

.center {
  margin: auto;
  width: 50%;
  height: 100%;
}
</style>
