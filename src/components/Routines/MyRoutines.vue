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
              max-width="1300"
              min-width="100"
            >

            <v-row class="justify-center">
<!--              <div class="text-h2 routines-title top-0 start-100" >my routines</div>-->
                          <h1>my routines</h1>
            </v-row>
            <v-row>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle" ></RoutineButton>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle"></RoutineButton>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle"></RoutineButton>
              <RoutineButton class="ma-3 position-absolute top-0 start-100 translate-middle"></RoutineButton>
              <add-routine class="ma-3 position-absolute top-0 start-100 translate-middle"></add-routine>
            </v-row>
          </v-sheet>
        </v-main>
    </v-app>
  </div>
</template>

<script>
import RoutineButton from "@/components/Routines/RoutineButton";
import TopBar from "@/components/logIn/TopBar";
import AddRoutine from "@/components/Routines/add";
export default {
  name: "MyRoutines",
  components: {AddRoutine, TopBar, RoutineButton}
}
</script>

<style scoped>

h1{
  color: #CFFFB3;
  font-family: "Bebas Neue";
}
.routines-title{
  color: #CFFFB3;
}
</style>