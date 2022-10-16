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
                  font-family: 'Roboto Light';
                "
                color="primary"
                @change="handleImage"
                v-model="readImg"
                rounded
                dark
                outlined
                label="Change Profile Picture"
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

                        <v-btn
                          @click="saveHandler()"
                          :color="saveColor"
                          filled
                          justify="center"
                          style="margin-right: auto; margin-left: auto; margin-bottom: 20px"
                        >
                          <span style="color: #1e1e1e">SAVE CHANGES</span>
                        </v-btn>

                </v-row>

              </v-container>
            </v-sheet>
          </v-row>
        </v-main>
      </v-app>

    <v-dialog v-model="dialogError" persistent width="610">
      <v-sheet color="error" outlined="outlined" width="600" rounded="xl">
        <v-card
            color="background"
            width="600"
            height="150"
            class="box center"
            rounded="xl"
        >
          <v-card-title style="color: #cfffb3">
            There has been an error with the details you have entered.
          </v-card-title>
          <v-card-subtitle style="color: white">
            Note that 'Name' and 'Last name' should not exceed 50 characters.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn style="margin-left: auto; margin-right: auto" @click="dialogError = false" outlined color="error">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
    </v-dialog>



      <v-dialog v-model="dialog" persistent width="610">
        <v-sheet color="primary" outlined="outlined" width="600" rounded="xl">
          <v-card
              color="background"
              width="600"
              height="120"
              class="box center"
              rounded="xl"
          >
            <v-card-title style="color: #cfffb3">
              Changes saved successfully
            </v-card-title>
            <v-card-actions>
              <v-btn style="margin-left: auto; margin-right: auto" @click="dialog = false" outlined color="primary">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-dialog>

      <v-dialog v-model="dialogImgError" persistent width="610">
        <v-sheet color="error" outlined="outlined" width="600" rounded="xl">
          <v-card
              color="background"
              width="600"
              height="120"
              class="box center"
              rounded="xl"
          >
            <v-card-title style="color: #cfffb3">
              Sorry, but maximum size of image is 80Kb
            </v-card-title>
            <v-card-actions>
              <v-btn style="margin-left: auto; margin-right: auto" @click="dialogImgError = false" outlined color="error">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-dialog>

      <v-dialog v-model="imgbbImgError" persistent width="620">
        <v-sheet color="error" outlined="outlined" width="600" rounded="xl">
          <v-card
              color="background"
              width="600"
              height="180"
              class="box center"
              rounded="xl"
          >
            <v-card-title style="color: #CFFFB3">
              Sorry, there has been an error while uploading your profile picture.
            </v-card-title>
            <v-card-subtitle style="color: white">
              Other users will not be able to see your profile picture. Please try to upload it again.
            </v-card-subtitle>
            <v-card-actions>
              <v-btn style="margin-left: auto; margin-right: auto" @click="imgbbImgError = false" outlined color="error">Close</v-btn>
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
      avatarUrl: "",
      firstName: "",
      lastName: "",
      readImg: "",
      dialog: false,
      dialogError: false,
      dialogImgError: false,
      imgbbImgError: false,
      IMGBB_APIKEY: '5a3d2c568ff11e50c066f293ad0e6641',
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
        this.dialogImgError = true;
        this.readImg = "";
      } else  {
        this.createBase64Image(this.readImg);
        let formData = new FormData();
        formData.append('image', this.readImg);


          fetch(`https://api.imgbb.com/1/upload?key=${this.IMGBB_APIKEY}`, {
            method: 'POST',
            body: formData
          }).then(response => response.json())
              .then(result => {
                this.avatarUrl = result.data.url;
                console.log(this.avatarUrl);
              }).catch(() => {
            this.avatarUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
            this.imgbbImgError = true;
          });


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

      const metadata = { img: this.image };
      const newInformation = new UpdatableCredentials(
        this.firstName,
        this.lastName,
        metadata,
        this.avatarUrl
      );
      console.log(newInformation);
      try {
        await UserApi.updateUser(newInformation);
        this.saveColor = "green";
        this.dialog = true;
      } catch (error) {
        this.saveColor = "red";
        this.dialogError = true;
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
