<template>
  <div>
    <v-card  class="box" color="secondary" rounded="xl" width="300" height="200">
      <v-container>
        <v-row class="mx-auto justify-center align-center">
          <v-icon large color="primary" class="center"> mdi-plus </v-icon>
        </v-row>
      </v-container>
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
}

.box {
  border-style: dashed;
}
</style>
