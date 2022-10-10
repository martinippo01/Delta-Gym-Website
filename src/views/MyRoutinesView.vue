<template>
  <div id="app">
    <v-app>
      <NavBar select="myRoutines" />
      <v-main class="background">
        <v-sheet
          class="mx-auto"
          color="secondary"
          max-height="1000"
          min-height="100"
          rounded="xl"
          max-width="1450"
          min-width="100"
        >
          <v-row justify="center" style="padding: 10px">
            <h1>my routines</h1>
          </v-row>

          <v-container
            color="secondary"
            style="justify-content: center"
            rounded="xl"
            elevation="0"
          >
            <v-row class="routines-group">
              <router-link
                to="/createRoutine"
                style="text-decoration: none; color: inherit; padding: 10px"
              >
                <Add />
              </router-link>

              <RoutineButton
                v-for="routine in routines"
                @click="handleClickRoutine()"
                :key="routine.id"
                style="text-decoration: none; color: inherit; padding: 10px"
                class="routine-card"
              ></RoutineButton>
            </v-row>
          </v-container>
          <v-btn
            color="primary"
            plain
            class="temp justify-end mr-7"
            @click="nextPage"
          >
            nextPage
          </v-btn>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import RoutineButton from "@/components/Routines/RoutineButton";
import NavBar from "@/components/NavBar";
import { RoutinesApi, FetchRoutines } from "@/api/routines";
import router from "@/router";
import Add from "@/components/Routines/add.vue";
import { useRoutinesStore } from "@/store/routinesStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "MyRoutines",
  components: { NavBar, RoutineButton, Add },
  async created() {
    try {
      this.resetStore();
      await this.setRoutines();
    } catch (error) {
      router.push("/errorPage");
    }
  },
  methods: {
    ...mapActions(useRoutinesStore, ["setRoutines"]),
    ...mapActions(useRoutinesStore,["nextPage"]),
    ...mapActions(useRoutinesStore,["resetStore"])

  },
  computed: {
    ...mapState(useRoutinesStore, ["routines"]),
  },


};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
.routines-title {
  color: #cfffb3;
}

.routines-group {
  padding: 20px;
  justify-content: center;
}

.routine-card {
  padding: 10px;
}
</style>
