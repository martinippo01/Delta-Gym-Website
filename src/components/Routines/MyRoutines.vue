<template>
<div id="app">
    <v-app>
      <TopBar></TopBar>
        <v-main class="background">
          <v-sheet
              class="mx-auto"
              color="secondary"
              max-height="1000"
              min-height="100"
              rounded="xl"
              max-width="1200"
              min-width="100"
            >
            <h1>my routines</h1>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle" ></RoutineButton>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle"></RoutineButton>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle"></RoutineButton>
          </v-sheet>
        </v-main>
    </v-app>
  </div>
</template>

<script>
import RoutineButton from "@/components/Routines/RoutineButton";
import TopBar from "@/components/logIn/TopBar";
export default {
  name: "MyRoutines",
  components: {TopBar, RoutineButton}
}
</script>

<style scoped>

h1{
  color: #CFFFB3;
  font-family: "Bebas Neue";
}
</style>