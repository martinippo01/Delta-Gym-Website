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
                @click="
                  handleClickRoutine();
                  console.log('clicked');
                "
                style="text-decoration: none; color: inherit; padding: 10px"
                class="routine-card"
              ></RoutineButton>
            </v-row>
          </v-container>
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
import { mapActions } from "pinia";
import useRoutineStore from "@/store/routinesStore";

export default {
  name: "MyRoutines",
  components: { NavBar, RoutineButton, Add },
  async created() {
    try {
      const res = await RoutinesApi.getAllRoutines();
      console.log(res);
      //this.setRoutines(res);
    } catch (error) {
      router.push("/erroPage");
    }
  },
  methods: {
    ...mapActions(useRoutineStore, ["setRoutines"]),
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
