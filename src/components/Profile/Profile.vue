<template>
  <div id="app">
    <v-app>
      <TopBar></TopBar>
      <v-main class="background ">

        <h1 class="d-flex justify-center align-center">my profile</h1>
        <div>
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
              color="primary"
              outlined

          >
            CHANGE PROFILE PICTURE
          </v-btn>
        </v-col>

        <v-col class="d-flex justify-center align-center background">
          <v-sheet
              rounded="xl"
              color="secondary"
              max-height="1000"
              max-width="500">
            <v-container>
              <v-row justify="end">
                <v-text-field  class="pt-10 pr-10 pl-10" label="Name" dark="dark" color="primary" v-model="name"/>
              </v-row>
              <v-row justify="end">
                <v-text-field  class="pt-5 pr-10 pl-10" label="Surname" dark="dark" color="primary" v-model="surname"/>
              </v-row>
              <v-row justify="end">
                <v-col >
                  <v-text-field  class="pt-5 pr-10 pl-10" label="Age" dark="dark" color="primary" v-model="age"/>
                </v-col>
                <v-col >
                  <v-text-field  class="pt-5 pr-10 pl-10" label="Phone" dark="dark" color="primary" v-model="phone"/>
                </v-col>
              </v-row>
              <v-row>
                <v-text-field  class="pt-5 pr-10 pl-10" label="Email" dark="dark" color="primary" v-model="email"/>
              </v-row>
              <v-row justify="end">
                <v-col >
                  <v-btn
                      color="primary"
                      text
                      class="temp"

                  >
                    DISCARD CHANGES
                  </v-btn>
                </v-col>
                <v-col >
                  <v-btn
                      color="primary"
                      outlined
                      class="temp"
                      justify="center"
                  >
                    SAVE CHANGES
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TopBar from "@/components/logIn/TopBar";

export default {
  name: "ProfilePage",
  components: {TopBar},
  data(){
    return{
      name:'',
      surname:'',
      email:'',
      age:'',
      phone:''
    }
  }
}
</script>

<style scoped>
  div{background-color: #4b4b4b}
  h1{
    color: #CFFFB3;
    font-family: "Bebas Neue";
  }
</style>