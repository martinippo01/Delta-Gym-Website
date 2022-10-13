<template>
  <v-app>
    <NavBar select="profile"></NavBar>
    <v-main class="background">
      <h1 class="d-flex justify-center align-center">my profile</h1>
      <v-col class="d-flex justify-center align-center background">
        <v-avatar size="200">
          <img style="" :src="image" alt="" />
        </v-avatar>
      </v-col>

      <v-col class="d-flex justify-center align-center background">
        <input
          style="background-color: #cfffb3"
          @change="handleImage"
          type="file"
          accept="image/*"
        />
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
            <v-row justify="end"> </v-row>
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
                <v-btn
                  @click="saveHandler()"
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
    </v-main>
    <!---->
    <!-- <v-snackbar v-model="error" color="error"> -->
    <!--   {{ errorText }} -->
    <!--   <template v-slot:action="{ attrs }"> -->
    <!--     <v-btn v-bind="attrs" @click="error = false" outlined> Close </v-btn> -->
    <!--   </template> -->
    <!-- </v-snackbar> -->
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
      image: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  async created() {
    try {
      const res = await UserApi.get();
      this.username = res.username;
      this.email = res.email;
      this.image = res.metadata;
    } catch (error) {
      this.snackbar = true;
      this.snackbarText = "Couldn't load the user information";
    }
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0]; // get first file
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    async saveHandler() {
      const newInformation = new UpdatableCredentials(
        this.firstName,
        this.lastName,
        ""
      );
      try {
        await UserApi.updateUser(newInformation);
        console.log("saved!");
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
