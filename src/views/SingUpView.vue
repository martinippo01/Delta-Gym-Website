<template>
  <v-app>
    <TopBar select="singUp" />
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
              height="475"
              width="500"
              rounded="xl"
              style="align-items: center"
            >
              <v-container>
                <v-row justify="end">
                  <v-text-field
                    class="pt-7 pr-10 pl-10"
                    label="Full Name"
                    dark="dark"
                    color="primary"
                    v-model="fullName"
                  />
                </v-row>
                <v-row justify="end">
                  <v-text-field
                    class="pt-3 pr-10 pl-10"
                    label="Email"
                    dark="dark"
                    color="primary"
                    v-model="email"
                  />
                </v-row>
                <v-row justify="end">
                  <v-text-field
                    class="pt-3 pr-10 pl-10"
                    label="Password"
                    dark="dark"
                    color="primary"
                    v-model="password"
                    type="password"
                  />
                </v-row>
                <v-row justify="end">
                  <v-text-field
                    class="pt-3 pr-10 pl-10"
                    label="Confirm Password"
                    dark="dark"
                    color="primary"
                    v-model="re_password"
                    type="password"
                  />
                </v-row>
                <v-row justify="end"> </v-row>
                <v-row justify="center">
                  <v-btn
                    color="primary"
                    plain
                    class="temp"
                    @click="registerHandler"
                  >
                    REGISTER
                  </v-btn>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <router-link to="/login">
                    <a justify="center"> Already have an account? </a>
                  </router-link>
                </v-row>
                <v-row justify="center" class="mt-4">
                  <router-link to="/login">
                    <a> Log In </a>
                  </router-link>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar" color="error">
      {{ snackbarMsg }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" @click="snackbar = false" outlined> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import TopBar from "@/components/logIn/TopBar.vue";

import { UserApi, Registration } from "@/api/user";
import { useUserStore } from "@/store/user";

import router from "@/router";

export default {
  name: "SingUp",
  components: { TopBar },
  data() {
    return {
      snackbar: false,
      snackbarMsg: "",
      fullName: "",
      email: "",
      password: "",
      re_password: "",
    };
  },
  methods: {
    filter: function (evt) {
      evt = evt ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async registerHandler() {
      const credentials = new Registration(
        this.fullName,
        this.email,
        this.password
      );
      const store = useUserStore();
      store.addEmail(this.email);
      try {
        await UserApi.addUser(credentials);
        router.push("/verifyEmail");
      } catch (error) {
        this.snackbar = true;
        this.snackbarMsg = "failed to add";
        //aca habria que hacer un buen trabajo, presentar bien en que fallo
        //esto es HCI
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
