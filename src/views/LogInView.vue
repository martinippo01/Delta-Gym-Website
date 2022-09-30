<template>
  <v-app>

    <TopBar/>
    <v-main class="background">
      <v-container >
        <v-row class="mt-16">
        <v-col class="d-flex justify-center align-center" >
          <v-img src="@/assets/Logo.png"   max-height="116" max-width="124"/>
        </v-col>
        </v-row>
        <v-row class="mt-15" >
          <v-col  class="d-flex justify-center align-center" style="align-items: center" >
          <v-sheet
              color="secondary"
              height="250"
              width="500"
              rounded="xl"
              style="align-items: center"

          >
            <v-container>
              <v-row justify="end">
            <v-text-field class="pt-10 pr-10 pl-10" label="Email" dark="dark" color="primary" v-model="email"/>
              </v-row>
              <v-row justify="end">
              <v-text-field class="pt-5 pr-10 pl-10" label="Password" dark="dark" color="primary" type="password" v-model="password"/>
              </v-row>
              <v-row justify="center">
            <v-btn
                :disabled="loading"
                color="primary"
                plain
                class="temp"

                            >
              LOG IN
            </v-btn>
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
import TopBar from "@/components/logIn/TopBar";

export default {
  name: "LogIn",
  components: {TopBar},
  data(){
    return{
      email:'',
      password:''
    }
  }
}
</script>

<style scoped>

.temp {
  border: thin solid #CFFFB3;
  background-color: #343434;
}
</style>