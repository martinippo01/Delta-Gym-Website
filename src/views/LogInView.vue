<template>
  <v-app>
    <NavBar select="logIn" />
    <v-main class="background">
      <v-container>
        <v-row class="mt-16">
          <v-col class="d-flex justify-center align-center">
            <v-img src="@/assets/Logo.png" max-height="116" max-width="124" />
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col
            class="d-flex justify-center align-center"
            style="align-items: center"
          >
            <v-sheet
              color="secondary"
              height="250"
              width="500"
              rounded="xl"
              style="align-items: center"
            >
              <v-container>
                <v-row justify="end">
                  <v-text-field
                    class="pt-10 pr-10 pl-10"
                    label="Username"
                    dark="dark"
                    color="primary"
                    v-model="username"
                  />
                </v-row>
                <v-row justify="end">
                  <v-text-field
                    class="pt-5 pr-10 pl-10"
                    label="Password"
                    dark="dark"
                    color="primary"
                    type="password"
                    v-model="password"
                  />
                </v-row>
                <v-row justify="center">
                  <v-btn
                    @click="loginHandler()"
                    color="primary"
                    plain
                    class="temp"
                  >
                    LOG IN
                  </v-btn>
                </v-row>

                <v-row justify="center" class="mt-4">
                  <router-link to="/signUp">
                    <a justify="center"> Don't have an account? </a>
                  </router-link>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!--    Esto es para el snackbar. Es como un pop up-->
    <v-snackbar v-model="snackbar" color="error">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" @click="snackbar = false" outlined> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import { useSecurityStore } from "../store/securityStore.js";
import router from "@/router";
import { Credentials } from "@/api/user";

export default {
  name: "LogIn",
  components: { NavBar },
  data() {
    return {
      username: "johnDoe1",
      password: "1234",
      snackbar: false,
      rememberMe: false,
      text: "Invalid username/password",
    };
  },
  methods: {
    loginHandler: async function () {
      const credentials = new Credentials(this.username, this.password);
      const store = useSecurityStore();

      try {
        await store.login(credentials, this.rememberMe);
        router.push("/myRoutines");
      } catch (error) {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped>
.temp {
  border: thin solid #cfffb3;
  background-color: #343434;
}
</style>
