<template>
  <div>
    <v-app>
      <v-main class="background">
<!--      <VideoLanding> </VideoLanding>-->
        <v-container class="overlay">
          <LandingOne />
          <LandingTwo />
          <LandingThree />
          <LandingFour />
          <TopBar class="topbar"> </TopBar>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import LandingOne from "./LandingOne.vue";
import LandingTwo from "./LandingTwo.vue";
import LandingThree from "./LandingThree.vue";
import LandingFour from "./LandingFour.vue";

import VideoLanding from "./VideoLanding.vue";
import TopBar from "../logIn/TopBar.vue";

export default {
  name: "LandingPage",
  components: {
    LandingOne,
    LandingTwo,
    LandingThree,
    LandingFour,
    // VideoLanding,
    TopBar,
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 20%;
  left: 0%;
  z-index: 1;
}
.topbar {
  top: 5%;
  right: 5%;
  position: fixed;
}
</style>
