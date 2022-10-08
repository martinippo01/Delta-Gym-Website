<template>
  <div>
      <v-sheet
        rounded="xl"
        outlined="outlined"
        color="primary"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 20 : 2"
            :class="{ 'on-hover': hover }"
            style="border-style: dot-dash; border-color: #CFFFB3"
            class="box center"
            color="secondary"
            rounded="xl"
            width="300"
            height="200"
          >
            <v-icon color="primary" class="center" size="xl"> mdi-plus </v-icon>
          </v-card>
        </v-hover>
      </v-sheet>
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
