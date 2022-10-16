<template>
  <v-app>
    <NavBar select="" />

    <div class="landing">
      <LandingScreen>
        <template #title> DELTA </template>
        <template #body>
          TRACK YOUR WORKOUTS, MEASURE YOUR PROGRESS AND, STAY MOTIVATED
        </template>
        <template #img>
          <img src="../assets/postWorkout.png" />
        </template>
      </LandingScreen>

      <LandingScreen>
        <template #title> WHAT MAKES US DIFFERENT </template>
        <template #body>
          WITH OUR UNIQUE DELTA SYSTEM EVERY WORKOUT WILL BE DIFFERENT—SEE
          IMPROVEMENT FROM DAY ONE.
        </template>
        <template #img>
          <img src="../assets/postWorkout.png" />
        </template>
      </LandingScreen>

      <LandingScreen>
        <template #title> PROGRESS, SHUFFLE, SKIP </template>
        <template #body>
          LET THE APP ADAPT TO YOURSELF: SHUFFLE EXERCISES, SKIP, RECORD—SEE THE
          WHOLE PICTURE
        </template>
        <template #img>
          <img src="../assets/inWorkout.png" />
        </template>
      </LandingScreen>

      <LandingScreen>
        <template #title> EXPLORE, CREATE </template>
        <template #body>
          EXPLORE OUR SELECTION OF ROUTINES OR CREATE YOUR OWN WITH OUR UNIQUE
          DELTA TRACKING
        </template>
        <template #img>
          <v-btn> EXPLORE ROUTINES </v-btn>
        </template>
      </LandingScreen>
    </div>
  </v-app>
</template>

<script>
import LandingScreen from "../components/LandingScreen.vue";
import NavBar from "../components/NavBar.vue";
import { mapActions } from "pinia";
import { useBreadCrumbs } from "@/store/breadCrumbsStore";

export default {
  name: "LandingPage",
  components: {
    LandingScreen,
    NavBar,
  },
  mounted() {
    this.cleanAll();
  },
  methods:{
    ...mapActions(useBreadCrumbs,['cleanAll'])
  }
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
