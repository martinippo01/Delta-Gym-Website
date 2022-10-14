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
      src="@/assets/routine_photo.jpg"
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
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useRoutinesStore } from "@/store/routinesStore";
import { useUserStore } from "@/store/user";

export default {
  name: "RoutineButton",
  components: {},
  props: {
    routineName: { type: String, required: true },
    routineId: { type: Number, required: true },
    exploreMode: { type: Boolean, required: true },
    directionName:{type:String,required:true}
  },
  data() {
    return {
      items: [
        { title: "Edit", action: this.editMe },
        { title: "Delete", action: this.deleteMe },
      ],
      photo: "@/assets/routine_photo.jpg",
      name: "",
      deleted: false,
    };
  },
  methods: {
    async deleteMe() {
      this.deleted = true;
      await this.deleteRoutine(this.routineId);
      await this.setRoutines(this.userId);
    },
    editMe() {
      this.$router.push({
        name: "createRoutine",
        params: {
          editMode: true,
          id: this.routineId,
        },
      });
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
