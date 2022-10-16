<template>
  <div>
    <div id="app">
      <v-app>
        <NavBar select="profile"></NavBar>
        <v-main class="background">

          <v-row justify="center">
            <h1 class="d-flex justify-center align-center">my profile</h1>
          </v-row>

          <v-row justify="center" style="margin-top: 20px; margin-bottom: 20px">
            <v-avatar size="200">
              <img style="" :src="image" alt="" />
            </v-avatar>
          </v-row>


          <v-row justify="center" style="margin-top: 20px; margin-bottom: 20px;">
            <v-sheet
                width="300"
                color="background"
            >
              <v-file-input
                style="
                  font-family: Bebas Neue;
                  background-color: #CFFFB3;
                "
                @change="handleImage"
                v-model="readImg"
                rounded
                accept="image/*"
              />
            </v-sheet>
          </v-row>

          <v-row style="margin-top: 20px">
          <v-sheet
              color="secondary"
              max-height="1000"
              width="500"
              rounded="xl"
              style="margin-left: auto; margin-right: auto"
            >
              <v-container style="border-radius: 25px">
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

                <v-row>

                    <v-col>
                      <v-btn
                          color="primary"
                          text
                      >
                        DISCARD CHANGES
                      </v-btn>
                    </v-col>

                    <v-col>
                        <v-btn
                          @click="saveHandler()"
                          :color="saveColor"
                          outlined
                          justify="center"
                        >
                          SAVE CHANGES
                        </v-btn>
                    </v-col>
                </v-row>

              </v-container>
            </v-sheet>
          </v-row>
        </v-main>
      </v-app>

    <v-dialog v-model="dialog" persistent width="610">
      <v-sheet color="error" outlined="outlined" width="600" rounded="xl">
        <v-card
            color="background"
            width="600"
            height="120"
            class="box center"
            rounded="xl"
        >
          <v-card-title style="color: #cfffb3">
            Profile details changed successfully
          </v-card-title>
          <v-card-actions>
            <v-btn style="margin-left: auto; margin-right: auto" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
    </v-dialog>
    </div>
  </div>
</template>

<script>
import { UserApi, UpdatableCredentials } from "@/api/user";
import NavBar from "@/components/NavBar";
import router from "@/router";
import { useUserStore } from "@/store/user";
import { mapActions } from "pinia";
import { useBreadCrumbs } from "@/store/breadCrumbsStore";

export default {
  name: "ProfilePage",
  components: { NavBar },
  data() {
    return {
      saveColor: "primary",
      image: "",
      firstName: "",
      lastName: "",
      readImg: "",
      dialog: false,
    };
  },
  async created() {
    this.cleanAll();
    this.addPage("Profile", false, "/profile");
    try {
      const res = await UserApi.get();
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.image = res.metadata.img;
    } catch (error) {
      this.snackbar = true;
      this.snackbarText = "Couldn't load the user information";
    }
  },
  methods: {
    ...mapActions(useBreadCrumbs, ["cleanAll"]),
    ...mapActions(useBreadCrumbs, ["addPage"]),
    handleImage() {
      if(this.readImg.size > 80000) {
        alert("Sorry, but maximum size of image is 80Kb");        
        this.readImg = "";
      } else  {
        this.createBase64Image(this.readImg);
      }
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    async saveHandler() {
      this.dialog = true;
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
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
</style>
