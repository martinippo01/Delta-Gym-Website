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
                <v-row justify="center" style="margin-top: 10px; margin-bottom: 5px">
                  <h1 style="font-size: 40px">Successfully verified email!</h1>
                </v-row>

                <v-row justify="center" style="margin-top: 5px; margin-bottom: 10px">
                  <router-link to="/login" style="text-decoration: none; color: inherit;">
                    <v-btn
                      outlined
                      color="primary"
                      style="font-family: 'Roboto Light'"
                    >Continue to login</v-btn>
                  </router-link>
                </v-row>
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
