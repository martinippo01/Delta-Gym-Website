<template>
  <v-app>
    <TopBar select="explore"></TopBar>
    <v-main class="background">
      <v-sheet
        class="mx-auto"
        color="secondary"
        max-height="1000"
        min-height="100"
        rounded="xl"
        max-width="1300"
        min-width="100"
      >
        <br />
        <v-row class="justify-center">
          <div class="text-h2 routines-title top-10 start-100">EXPLORE</div>
        </v-row>
        <br />
        <v-autocomplete
          dense
          filled
          rounded
          solo
          backgroundColor="#F5EFE6"
          style="margin-left: 4%; margin-right: 4%"
        ></v-autocomplete>
        <v-row>
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
          <add-routine
            class="ma-3 position-absolute top-0 start-100 translate-middle"
          ></add-routine>
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "@/components/logIn/TopBar";
import RoutineButton from "@/components/Routines/RoutineButton";

export default {
  name: "ExploreView",
  components: { TopBar, RoutineButton },
};
</script>

<style scoped></style>
