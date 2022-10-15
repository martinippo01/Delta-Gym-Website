<template>
  <v-app>
    <NavBar select="singUp" />
    <v-main class="background">
      <v-container>
        <v-row class="mt-1">
          <v-col class="d-flex justify-center align-center">
            <v-img src="@/assets/Logo.png" max-height="116" max-width="124" />
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-col
            class="d-flex justify-center align-center"
            style="align-items: center"
          >
            <v-sheet
              color="secondary"
              width="500"
              rounded="xl"
              style="align-items: center; padding: 10px"
            >
              <v-container
                justify="center"
                style="padding: 10px; font-family: 'Bebas Neue'; color: #cfffb3"
              >
                <h1>Successfully verified email!</h1>

                <router-link to="/login">
                  <h2 >Continue to login</h2>
                </router-link>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar";
export default {
  name: "VerifiedEmailSuccessfullyView",

  components: { NavBar },
  data() {
    return {};
  },
};
</script>
