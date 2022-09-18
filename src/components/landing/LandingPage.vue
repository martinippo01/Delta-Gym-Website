<template>
  <div>
    <VideoLanding> </VideoLanding>
    <v-container class="overlay">
      <TopBar class="t"> </TopBar>
      <LandingOne />
      <LandingTwo />
    </v-container>
  </div>
</template>

<script>
import LandingOne from "./LandingOne.vue";
import LandingTwo from "./LandingTwo.vue";
import VideoLanding from "./VideoLanding.vue";
import TopBar from "../logIn/TopBar.vue";

export default {
  name: "LandingPage",
  components: { LandingOne, LandingTwo, VideoLanding, TopBar },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 20%;
  left: 0%;
  z-index: 1;
}

.t {
  position: fixed;
}
</style>
