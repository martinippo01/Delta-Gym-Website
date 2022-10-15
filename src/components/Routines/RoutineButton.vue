<template>
  <v-card
    color="secondary"
    class="hover-click"
    rounded="xl"
    width="350"
    height="250"
  >
    <v-img
      class=""
      height="250px"
      :src="this.image"
      @click="toRoutine"
    >
      <v-container>
        <v-row class="justify-center">
          <h1 style="justify-self: center; margin-top: 6px">
            {{ this.routineName }}
          </h1>
          <v-btn
            icon
            v-on:click.stop="deleteMe()"
            fill
            style="position: absolute; top: 10px; right: 10px"
            @click="deleteMe"
            v-if="!exploreMode"
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-container>

      <v-row
        style="position: absolute; margin-top: 150px; margin-left: 20px"
        v-if="exploreMode"
      >
        <v-avatar size="32">
          <v-img
            alt="user"
            :src="this.getProfilePic()"></v-img>
        </v-avatar>
        <p style="font-family: 'Roboto Light'; color: white; margin-left: 10px; margin-top: 7px">{{ this.routineUserName }}</p>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useRoutinesStore } from "@/store/routinesStore";
import { useUserStore } from "@/store/user";
import {RoutinesApi} from "@/api/routines";
import { exerciseApi } from "@/api/exercises";

export default {
  name: "RoutineButton",
  components: {},
  props: {
    routineName: { type: String, required: true },
    routineId: { type: Number, required: true },
    exploreMode: { type: Boolean, required: true },
    directionName:{type:String,required:true},
    routineUserName:{type: String, required: false  },
    routineUserId:{type: Number, required: false},
  },

  data() {
    return {
      items: [
        { title: "Edit", action: this.editMe },
        { title: "Delete", action: this.deleteMe },
      ],
      photo: "",
      name: "",
      deleted: false,
      image:''
    };
  },
  methods: {
    async deleteMe() {
      this.deleted = true;
      await this.deleteRoutine(this.routineId);
      await this.setRoutines(this.userId);
    },
    getProfilePic(){
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    },

    toRoutine() {
      this.$router.push({
        name: `${this.directionName}`,
        params: {
          editMode: false,
          id: this.routineId,
          from: "myRoutine",
        },
      });
    },

    ...mapActions(useRoutinesStore, ["deleteRoutine"]),
    ...mapActions(useRoutinesStore, ["setRoutines"]),
  },
  async created() {
    try {
      const res = await RoutinesApi.getRoutine(this.routineId);
      this.image = res.metadata.img;
      console.log(this.image);
      if (this.image.length <= 0) {
        const images = require.context('../../assets', false, /\.png$/)
        this.image = images('./' + 'logo' + ".png")
      }
    } catch (error) {
      const images = require.context('../../assets', false, /\.png$/)
      this.image = images('./' + 'DSC_0154' + ".png")    }
  },
  computed: {
    ...mapState(useUserStore, ["userId"]),
  },
};
</script>

<style scoped>
h1 {
  font-family: "Bebas Neue";
  color: white;
}
.hover-click {
  cursor: pointer;
}
</style>
