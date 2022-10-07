<template>
  <div id="app">
  <v-app>
    <TopBar select="explore"></TopBar>

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

          <v-row
            class="routines-group"
          >
            <RoutineButton
              class="ma-3 position-absolute top-0 start-100 translate-middle"
            ></RoutineButton>
            <RoutineButton
              class="ma-3 position-absolute top-0 start-100 translate-middle"
            ></RoutineButton>
            <RoutineButton
              class="ma-3 position-absolute top-0 start-100 translate-middle"
            ></RoutineButton>
            <RoutineButton
              class="ma-3 position-absolute top-0 start-100 translate-middle"
            ></RoutineButton>
            <RoutineButton
              class="ma-3 position-absolute top-0 start-100 translate-middle"
            ></RoutineButton>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</div>
</template>

<script>
import TopBar from "@/components/logIn/TopBar";
import RoutineButton from "@/components/Routines/RoutineButton";


export default {
  name: "ExploreView",
  components: { TopBar, RoutineButton },
};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}

.routines-group{
  padding: 20px;
  justify-content: center;
}
</style>
