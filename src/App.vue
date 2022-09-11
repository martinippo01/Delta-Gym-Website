<template>
  <div>
    <VideoLanding> </VideoLanding>
    <TextLanding> </TextLanding>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import VideoLanding from "@/components/VideoLanding.vue";
  import TextLanding from "@/components/TextLanding.vue";

  export default Vue.extend({
    name: "App",
    components: { TextLanding, VideoLanding },
    data: () => ({
    }),
  });
</script>

