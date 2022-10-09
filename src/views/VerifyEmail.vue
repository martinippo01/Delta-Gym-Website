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
              width="500"
              rounded="xl"
              style="align-items: center; padding: 10px"
            >
              <v-container>
                <v-row
                  justify="center"
                  style="
                    padding: 10px;
                    font-family: 'Bebas Neue';
                    color: #cfffb3;
                  "
                >
                  <h1>Verify email</h1>
                </v-row>

                <v-row
                  justify="center"
                  style="padding: 10px; font-family: 'Roboto'; color: white"
                >
                  <p>
                    Please check your inbox at
                    <span style="font-family: 'Roboto Black'">email</span>. Use
                    the code found in the email to verify your account.
                    <br /><span style="font-family: 'Roboto Black'">Note:</span>
                    Do not share or type the code outside of this website
                  </p>
                </v-row>

                <v-row justify="end">
                  <v-otp-input
                    dark
                    color="primary"
                    rounded
                    length="6"
                    style="padding: 10px"
                    @finish="onFinish"
                  ></v-otp-input>
                  <v-overlay absolute :value="loading">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-overlay>
                </v-row>

                <v-row justify="center" style="padding: 10px">
                  <router-link
                    style="text-decoration: none; color: inherit; padding: 10px"
                    to="/VerifyEmail"
                  >
                    <v-btn
                      :disabled="loading"
                      color="primary"
                      plain
                      class="temp"
                      @click="snackbar = true"
                    >
                      VERIFY
                    </v-btn>
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
import { UserApi, Confirmation } from "@/api/user";
import TopBar from "@/components/logIn/TopBar";
import router from "@/router";

import { useUserStore } from "@/store/user";

export default {
  name: "VerifyEmail",
  components: { TopBar },
  data() {
    return {
      snackbar: false,
      text: `Error: The verification code typed does not match`,
      loading: false,
      snackbarColor: "default",
    };
  },
  methods: {
    async onFinish(rsp) {
      this.loading = true;
      const store = useUserStore();

      const confirmation = new Confirmation(store.email, rsp);

      try {
        const res = await UserApi.confirmUser(confirmation);
        console.log(res);
        this.loading = false;
        router.push("/login");
      } catch (error) {
        this.snackbarColor = "warning";
        this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`;
        this.snackbar = true;
        this.loading = false;
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
