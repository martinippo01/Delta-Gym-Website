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

      <v-col
        class="d-flex justify-center align-center background"
        style="width: 200px; margin: auto"
      >
        <v-file-input
          style="
            width: 600px;
            font-family: Bebas Neue;
            background-color: #cfffb3;
            padding-top: 10%;
            padding-left: 10%;
          "
          rounded="xl"
          @change="handleImage"
          v-model="readImg"
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
                  :color="saveColor"
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
      saveColor: "primary",
      image: "",
      username: "",
      firstName: "",
      lastName: "",
      readImg: "",
    };
  },
  async created() {
    try {
      const res = await UserApi.get();
      this.username = res.username;
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.email = res.email;
      this.image = res.metadata.img;
    } catch (error) {
      this.snackbar = true;
      this.snackbarText = "Couldn't load the user information";
    }
  },
  methods: {
    handleImage() {
      this.createBase64Image(this.readImg);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    async saveHandler() {
      const metadata = { img: this.image };
      const newInformation = new UpdatableCredentials(
        this.firstName,
        this.lastName,
        metadata
      );
      try {
        await UserApi.updateUser(newInformation);
        this.saveColor = "green";
      } catch (error) {
        this.saveColor = "red";
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

