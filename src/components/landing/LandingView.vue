<template>
  <v-main class="background">
    <v-parallax
      height="800"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-row class="landingPage" align="center" align-content="center">
        <v-col>
          <v-flex class="title">
            <slot name="title" />
          </v-flex>
          <div class="text">
            <slot name="body" />
          </div>
        </v-col>
        <div class="image">
          <slot name="img" />
        </div>
      </v-row>
    </v-parallax>
  </v-main>
</template>

<script>
export default {
  name: "LandingTwo",
  components: {},
};
</script>

<style scoped>
.text {
  font-family: "Bebas Neue";
  font-weight: bold;
  color: white;
  padding-left: 20%;
  font-size: 300%;
  width: 60%;
}

.title {
  font-family: "Bebas Neue";
  font-weight: bold;
  color: white;
  padding-left: 20%;
  padding-top: 10%;
  font-size: 800%;
}

.image {
  margin-right: 10%;
  max-width: 100;
  scale: 0.6;
}

.landingPage {
  padding-top: 15%;
  padding-bottom: 10%;
  font-size: 80%;
}
</style>
