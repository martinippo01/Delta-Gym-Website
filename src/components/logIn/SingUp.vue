<template>

  <v-app>

    <TopBar select="singUp"/>
    <v-main class="background">
      <v-container >
        <v-row class="mt-1">
          <v-col class="d-flex justify-center align-center" >
            <v-img src="@/assets/Logo.png"   max-height="116" max-width="124"/>
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
                <v-row justify="end">
                  <v-text-field class="pt-7 pr-10 pl-10" label="Full Name" dark="dark" color="primary" v-model="fullName"/>
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-3 pr-10 pl-10" label="Email" dark="dark" color="primary" v-model="email"/>
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-3 pr-10 pl-10" label="Password" dark="dark" color="primary" v-model="password" type="password"/>
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-3 pr-10 pl-10" label="Confirm Password" dark="dark" color="primary" v-model="re_password" type="password"/>
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-3 pr-10 pl-10" label="Age" dark="dark" color="primary" @keypress="filter" v-model="age"/>
                </v-row>
                <v-row justify="center">
                  <v-btn
                      :disabled="loading"
                      color="primary"
                      plain
                      class="temp"

                  >
                    REGISTER
                  </v-btn>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <a href="http://localhost:8080/LogIn.vue" justify="center">
                    Already have an account?
                  </a>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <a href="http://localhost:8080/LogIn.vue" >
                        Log In
                  </a>
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
import TopBar from "@/components/logIn/TopBar.vue";
export default {
  name: "SingUp",
  components:{TopBar},
  data(){
    return{
      fullName:'',
      email:'',
      password:'',
      re_password:'',
      age:''
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
}
</script>

<style scoped>
.temp {
  border: thin solid #CFFFB3;
  background-color: #343434;
}
</style>