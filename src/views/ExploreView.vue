<template>
  <div id="app">
    <v-app>
      <NavBar select="explore"></NavBar>

      <v-main class="background">
        <v-sheet
          class="mx-auto"
          color="secondary"
          max-height="1000"
          min-height="100"
          rounded="xl"
          max-width="1400"
          min-width="100"
        >
          <v-row class="justify-center" style="padding: 10px">
            <h1>EXPLORE</h1>
          </v-row>

          <v-autocomplete
            dense
            solo
            :items="routines"
            rounded
            backgroundColor="#cccccc"
            label="Search"
            style="margin-left: 4%; margin-right: 4%; padding: 10px"
          ></v-autocomplete>

          <v-container
            color="secondary"
            style="justify-content: center"
            rounded="xl"
            elevation="0"
          >
            <v-row  >
              <RoutineButton v-for="r in routines" v-bind:key="r" :routineName="r" class="routines-group" />
            </v-row>
          </v-container>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import RoutineButton from "@/components/Routines/RoutineButton";

export default {
  name: "ExploreView",
  components: { NavBar, RoutineButton },
  data() {
    return {
      routines: ["leg day", "push day"],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}

.routines-group {
  padding: 20px;
  justify-content: center;
}
</style>
