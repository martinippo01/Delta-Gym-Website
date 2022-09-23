<template>
  <div id="app">
    <v-app>
      <TopBar></TopBar>
      <v-main class="background ">

        <h1 class="d-flex justify-center align-center">my profile</h1>

        <v-col class="d-flex justify-center align-center background">
          <v-avatar size="200">
            <img
                src="@/assets/Lionel_Messi_20180626.jpg"
                alt="MESSI"
            >
          </v-avatar>
        </v-col>

        <v-col class="d-flex justify-center align-center background">
          <v-btn
              class="tmp"
              :disabled="loading"
              color="primary"
              outlined

          >
            CHANGE PROFILE PICTURE
          </v-btn>
        </v-col>

        <v-col class="d-flex justify-center align-center background">
          <v-sheet
              color="white"
           elevation="1"
           max-height="1000"
           rounded
           max-width="500">
            <v-container>
              <v-row justify="end">
                <v-text-field  class="pt-10 pr-10 pl-10" label="Name"/>
              </v-row>
              <v-row justify="end">
                <v-text-field  class="pt-5 pr-10 pl-10" label="Surname" />
              </v-row>
              <v-row justify="end">
                <v-col >
                  <v-text-field  class="pt-5 pr-10 pl-10" label="Age" />
                </v-col>
                <v-col >
                  <v-text-field  class="pt-5 pr-10 pl-10" label="Phone" />
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-text-field  class="pt-5 pr-10 pl-10" label="Email" />
              </v-row>
              <v-row justify="center">
                <v-col >
                <v-btn
                    :disabled="loading"
                    color="primary"
                    text
                    class="temp"

                >
                  DISCARD CHANGES
                </v-btn>
                </v-col>
                <v-col >
                  <v-btn
                    :disabled="loading"
                    color="primary"
                       outlined
                       class="temp"

                >
                  SAVE CHANGES
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TopBar from "@/components/logIn/TopBar";

export default {
  name: "ProfilePage",  components: {TopBar},
}
</script>

<style scoped>
  div{background-color: #4b4b4b}
  h1{
    color: #CFFFB3;
    font-family: "Bebas Neue";
  }
</style>