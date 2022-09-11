<template>
  <div>
  <VideoWelcome> </VideoWelcome>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import VideoWelcome from "@/components/VideoWelcome.vue";

  export default Vue.extend({
    name: "App",
    components: { VideoWelcome },
    data: () => ({
    }),
  });
</script>

