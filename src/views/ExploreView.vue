<template>
  <div id="app">
    <v-app>
      <NavBar select="explore"></NavBar>

      <v-main class="background">
        <v-sheet
          class="mx-auto"
          style="margin-top: 20px; justify-content: center"
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

          <v-container
            color="secondary"
            style="justify-content: center"
            rounded="xl"
          >
            <v-row>
              <RoutineButton
                v-for="routine in routines"
                @click.native="toRoutine(false)"
                :key="routine.id"
                style="margin: 10px"
                :routineName="routine.name"
              >
              </RoutineButton>
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

import { useRoutinesStore } from "@/store/routinesStore";
import router from "@/router";
import { mapActions, mapState } from "pinia";
import { UserApi, UsersSearch } from "@/api/user";
import { RoutinesApi } from "@/api/routines";

export default {
  name: "ExploreView",
  components: { NavBar, RoutineButton },
  data() {
    return {
      routines: {},
    };
  },
  async created() {
    try {
      this.routines = await RoutinesApi.getAllUsersRoutines(0);
    } catch (error) {
      router.push("/errorPage");
    }
  },
};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
</style>
