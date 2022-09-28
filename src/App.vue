<template>
  <div>
    <MyRoutines> </MyRoutines>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import ProfilePage from "@/components/Profile/Profile.vue";
  import Vuetify from 'vuetify/lib';
  import LandingOne from "@/components/landing/LandingOne.vue";
  import VideoLanding from "@/components/landing/VideoLanding.vue";
  import LogIn from "@/components/logIn/LogIn.vue";
  import SingUp from "@/components/logIn/SingUp.vue";
  import LandingPage from "@/components/landing/LandingPage.vue";
  import RoutineButton from "@/components/Routines/RoutineButton.vue";
  import MyRoutines from "@/components/Routines/MyRoutines.vue";



  export default Vue.extend({
    name: "App",
    components: {MyRoutines},
    data: () => ({
    }),
  });

  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  })

</script>

