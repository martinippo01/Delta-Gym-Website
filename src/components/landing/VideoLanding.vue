<template>
  <div>
    <div id="set-height"></div>
    <p id="time"></p>
    <video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload">
      <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="../../assets/lu.mp4" />
    </video>
    <div class="overlay">
      <v-card elevation="23" outlined height="200" width="600">
        <v-span> DELTA </v-span>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoLanding",

  mounted() {
    const frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 200,
      // get page height from video duration
      setHeight = document.getElementById("set-height"),
      // select video element
      vid = document.getElementById("v0");

    // dynamically set the page height according to video length
    vid.addEventListener("loadedmetadata", function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      vid.currentTime = window.pageYOffset / playbackConst;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  },
};
</script>

<style scoped>
#set-height {
  display: block;
}

#v0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.container video {
  position: relative;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: 1;
}
</style>
