<template>
  <v-app>
    <TopBar select=""/>

    <div class="landing">
    <LandingView>
      <template #title> DELTA </template>
      <template #body>
        TRACK YOUR WORKOUTS, MEASURE YOUR PROGRESS AND, STAY MOTIVATED
      </template>
      <template #img>
        <img src="../assets/postWorkout.png"  />
      </template>
    </LandingView>

    <LandingView>
      <template #title> WHAT MAKES US DIFFERENT </template>
      <template #body>
        WITH OUR UNIQUE DELTA SYSTEM EVERY WORKOUT WILL BE DIFFERENT—SEE
        IMPROVEMENT FROM DAY ONE.
      </template>
      <template #img>
        <img src="../assets/postWorkout.png" />
      </template>
    </LandingView>

    <LandingView>
      <template #title> PROGRESS, SHUFFLE, SKIP </template>
      <template #body>
        LET THE APP ADAPT TO YOURSELF: SHUFFLE EXERCISES, SKIP, RECORD—SEE THE
        WHOLE PICTURE
      </template>
      <template #img>
        <img src="../assets/inWorkout.png" />
      </template>
    </LandingView>

    <LandingView>
      <template #title> EXPLORE, CREATE </template>
      <template #body>
        EXPLORE OUR SELECTION OF ROUTINES OR CREATE YOUR OWN WITH OUR UNIQUE
        DELTA TRACKING
      </template>
      <template #img>
        <v-btn> EXPLORE ROUTINES </v-btn>
      </template>
    </LandingView>

  </div>
  </v-app>
</template>

<script>
import LandingView from "../components/landing/LandingView.vue";
import TopBar from "../components/logIn/TopBar.vue";

export default {
  name: "LandingPage",
  components: {
    LandingView,
    TopBar,

  },
};
</script>

<style scoped>
.landing {
  background-color: black;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

</style>
