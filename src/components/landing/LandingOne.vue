<template>
  <v-main class="background">
    <v-row class="landingPage" align="center" align-content="center">
      <v-col class=" pa-2">
        <v-flex class="mainTitle"> DELTA </v-flex>
        <div class="text">
          TRACK YOUR WORKOUTS, MEASURE YOUR PROGRESS AND, STAY MOTIVATED
        </div>
      </v-col>
      <img class="phoneMain" src="../../assets/postWorkout.png" />
    </v-row>
  </v-main>
</template>

<script>
import "../../assets/styles/landing.css";

export default {
  name: "LandingOne",
};
</script>

<style scoped>
.phoneMain {
  padding-top: 0;
  margin-top: 0;
  scale: 0.6;
}
</style>
