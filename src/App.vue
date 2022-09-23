<template>
  <div>
    <ProfilePage> </ProfilePage>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import ProfilePage from "@/components/Profile/Profile.vue";
  import Vuetify from 'vuetify/lib';



  export default Vue.extend({
    name: "App",
    components: { ProfilePage},
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

