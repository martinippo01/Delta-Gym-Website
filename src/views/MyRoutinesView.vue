<template>
  <div id="app">
    <v-app>
      <MainTopBar select="myRoutines" />
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

          <v-row
            justify="center"

          >
            <h1>my routines</h1>
          </v-row>


          <v-container
            color="secondary"
            style="justify-content: center"
            rounded="xl"
            elevation="0"
          >
                <v-row
                  class="routines-group"
                >
                  <router-link to="/createRoutine">
                    <add-routine
                      class=" routine-card"
                    ></add-routine>
                  </router-link>
                  <RoutineButton
                    class=" routine-card"
                  ></RoutineButton>
                  <RoutineButton
                    class=" routine-card"
                  ></RoutineButton>
                  <RoutineButton
                    class=" routine-card"
                  ></RoutineButton>
                  <RoutineButton
                    class=" routine-card"
                  ></RoutineButton>
                  <RoutineButton
                    class=" routine-card"
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
import MainTopBar from "@/components/MainTopBar";
import AddRoutine from "@/components/Routines/add";
export default {
  name: "MyRoutines",
  components: { AddRoutine, MainTopBar, RoutineButton },
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

.routines-group{
  padding: 20px;
  justify-content: left;
}

.routine-card{
  padding: 10px;
}
</style>
