<template>
  <div>
    <VideoLanding> </VideoLanding>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import VideoLanding from "@/components/landing/VideoLanding.vue";
  import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

  export default Vue.extend({
    name: "App",
    components: { VideoLanding},
    data: () => ({
    }),
  });
</script>

