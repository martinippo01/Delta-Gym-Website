<template>
  <v-app>
    <TopBar select="singUp"/>
    <v-main class="background">
      <v-container >
        <v-row class="mt-1">
          <v-col class="d-flex justify-center align-center" >
            <v-img src="@/assets/Logo.png" max-height="116" max-width="124"/>
          </v-col>
        </v-row>
        <v-row class="mt-3" >
          <v-col  class="d-flex justify-center align-center" style="align-items: center" >
            <v-sheet
              color="secondary"
              height="475"
              width="500"
              rounded="xl"
              style="align-items: center"

            >
              <v-container>

                <v-row justify="center" style="padding: 10px; font-family: 'Bebas Neue'; color: #cfffb3">
                  <h1>Verify email</h1>
                </v-row>

                <v-row justify="end">
                  <v-text-field class="pt-7 pr-10 pl-10" label="Code" dark="dark" color="primary" @keypress="filter" v-model="code"/>
                </v-row>
                <v-row justify="center">
                  <router-link style="text-decoration: none; color: inherit; padding: 10px" to="/VerifyEmail">
                    <v-btn
                      :disabled="loading"
                      color="primary"
                      plain
                      class="temp"
                    >
                      VERIFY
                    </v-btn>
                  </router-link>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <router-link to="/login">
                    <a justify="center">
                      Already have an account?
                    </a>
                  </router-link>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <router-link to="/login">
                    <a>
                      Log In
                    </a>
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

import TopBar from "@/components/logIn/TopBar";
export default {
  name: "VerifyEmail",
  components: { TopBar  },
  data(){
    return{
      code:''
    }
  },
  methods:{
    filter: function (evt) {
      evt = (evt) ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.temp {
  border: thin solid #CFFFB3;
  background-color: #343434;
}
</style>