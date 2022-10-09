<template>
  <v-app>
    <NavBar select="profile"></NavBar>
    <v-main class="background">
      <h1 class="d-flex justify-center align-center">my profile</h1>
      <v-col class="d-flex justify-center align-center background">
        <v-avatar size="200">
          <img src="@/assets/Lionel_Messi_20180626.jpg" alt="MESSI" />
        </v-avatar>
      </v-col>

      <v-col class="d-flex justify-center align-center background">
        <v-btn class="tmp" color="primary" outlined>
          CHANGE PROFILE PICTURE
        </v-btn>
      </v-col>

      <v-col class="d-flex justify-center align-center background">
        <v-sheet
          rounded="xl"
          color="secondary"
          max-height="1000"
          max-width="500"
        >
          <v-container>
            <v-row justify="end">
              <v-text-field
                class="pt-10 pr-10 pl-10"
                label="Name"
                dark="dark"
                color="primary"
                v-model="firstName"
              />
            </v-row>
            <v-row justify="end">
              <v-text-field
                class="pt-10 pr-10 pl-10"
                label="Last Name"
                dark="dark"
                color="primary"
                v-model="lastName"
              />
            </v-row>
            <v-row justify="end">
              <v-text-field
                disabled
                class="pt-5 pr-10 pl-10"
                label="Username"
                dark="dark"
                color="primary"
                v-model="username"
              />
            </v-row>
            <v-row justify="end">
              <v-col>
                <v-text-field
                  class="pt-5 pr-10 pl-10"
                  label="Age"
                  dark="dark"
                  color="primary"
                  v-model="age"
                />
              </v-col>
              <v-col>
                <v-text-field
                  class="pt-5 pr-10 pl-10"
                  label="Phone"
                  dark="dark"
                  color="primary"
                  v-model="phone"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-text-field
                disabled
                class="pt-5 pr-10 pl-10"
                label="Email"
                dark="dark"
                color="primary"
                v-model="email"
              />
            </v-row>
            <v-row justify="end">
              <v-col>
                <v-btn color="primary" text class="temp">
                  DISCARD CHANGES
                </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" outlined class="temp" justify="center">
                  SAVE CHANGES
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-main>
    <!-- <v-snackbar v-model="snackbar"> -->
    <!--   {{ text }} -->
    <!---->
    <!--   <template v-slot:action="{ attrs }"> -->
    <!--     <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"> -->
    <!--       Close -->
    <!--     </v-btn> -->
    <!--   </template> -->
    <!-- </v-snackbar> -->
  </v-app>
</template>

<script>
import { UserApi, UpdatableCredentials } from "@/api/user";
import NavBar from "@/components/NavBar";
import router from "@/router";
import { useUserStore } from "@/store/user";
import { mapActions } from "pinia";

export default {
  name: "ProfilePage",
  components: { NavBar },
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      avatar: "",
      birthdate: 0,
      phone: "",
      text: "unexpected error",
      snackbar: false,
    };
  },
  async created() {
    try {
      const res = await UserApi.get();
      this.username = res.username;
      this.email = res.email;
    } catch (error) {
      this.snackbar = true;
      this.snackbarText = "Couldn't load the user information";
    }
  },
  methods: {
    async saveHandler() {
      const newInformation = new UpdatableCredentials(
        this.firstName,
        this.lastName,
        this.gender,
        this.birthdate,
        this.avatar
      );
      try {
        await UserApi.updateUser(newInformation);
      } catch (error) {
        this.snackbar = true;
        this.snackbarText = "Couldn't update the user ";
        router.push("/erroPage");
      }
    },
  },
};
</script>

<style scoped>
div {
  background-color: #4b4b4b;
}
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
</style>
