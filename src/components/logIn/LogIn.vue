<template>
  <v-app>

    <v-app-bar app color="background VMenu "   elevation="1">
      <TopBar></TopBar>
    </v-app-bar>
    <v-main class="background">
      <v-container >
        <v-row class="mt-16">
        <v-col class="d-flex justify-center align-center" >
          <v-img src="@/assets/LOGO.png"   max-height="116" max-width="124"/>
        </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col class="d-flex justify-center align-center">
          <v-sheet
              color="secondary"
              height="300"
              width="500"
              rounded="xl"
          >
            <v-text-field class="pt-10 pr-10 pl-10" label="Email" />
            <v-text-field class="pt-5 pr-10 pl-10" label="Password" />

          </v-sheet>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import TopBar from "@/components/logIn/TopBar";

export default {
  name: "LogIn",
  components: {TopBar},
}
</script>

<style scoped>

</style>