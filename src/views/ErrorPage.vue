<template>
  <div id="app">
    <v-app>
      <NavBar></NavBar>
      <v-main class="background">
        <v-row class="justify-center">
          <v-card
            max-width="500"
            color="secondary"
            style="padding: 40px"
            rounded="xl"
          >
            <v-row class="justify-center">
              <h1>We are sorry!</h1>
              <h2>
                There has been an
                <span style="color: #ef5757; font-family: 'Roboto Black'"
                  >error</span
                >
              </h2>
            </v-row>
            <v-row justify="center" style="padding: 10px">
              <router-link style="text-decoration: none; color: inherit" to="/">
                <v-btn color="primary" outlined class="temp">
                  Take me to the home page
                </v-btn>
              </router-link>
            </v-row>
          </v-card>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "ErrorPage",
  components: { NavBar },
};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
  font-size: 80px;
}

h2 {
  color: #cfffb3;
  font-family: "Roboto Thin";
  font-size: 30px;
}
.temp {
  border: thin solid #cfffb3;
  background-color: #343434;
}
</style>
