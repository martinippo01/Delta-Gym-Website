<template>
  <div id="app">
    <v-app>
      <NavBar select="myRoutines" />
      <v-main class="background">
        <v-sheet
          class="mx-auto"
          style="margin-top: 20px; justify-content: center"
          color="secondary"
          min-height="100"
          rounded="xl"
          max-width="1400"
          min-width="100"
        >
          <v-row justify="center" style="padding: 10px">
            <h1>my routines</h1>
          </v-row>

          <v-container
            color="secondary"
            style="justify-content: center"
            rounded="xl"
            elevation="0"
          >
            <v-row justify="center">

              <Add
                @click.native="dialog = true"
                style="text-decoration: none; color: inherit; margin: 10px; justify-content: center"
              />
              <RoutineButton
                v-for="routine in routines"
                :key="routine.id"
                style="text-decoration: none; color: inherit; margin: 10px"
                :routineName="routine.name"
                :routine-id="routine.id"
                :exploreMode="false"
                directionName="createRoutine"
              ></RoutineButton>
            </v-row>
          </v-container>
          <v-row
            justify="center"
            style="margin: 10px;"
          >
            <v-btn
              fab
              small
              color="primary"
              icon
              :disabled="this.page === this.minPage"
              @click="previousPageAux"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <p style="color: #CFFFB3; padding: 7px 0px">{{this.page + 1}} / {{this.maxPage + 1}}</p>

            <v-btn
              fab
              small
              color="primary"
              icon
              :disabled="this.page === this.maxPage"
              @click="nextPageAux"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-main>
    </v-app>

    <v-dialog
      v-model="dialog"
      persistent
      width="600px"
    >
      <v-card color="background">
        <v-card-title>
          <span class="text-h5" style="color: #cfffb3">New Routine</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="routineTitle"
                  label="Name"
                  dark
                  color="primary"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Description"
                  color="primary"
                  v-model="routineDetail"
                  dark
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-checkbox
            dark
            color="primary"
            v-model="public"
            label="PUBLIC"
          ></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            outlined
            @click="dialog = false"
          >
            Discard
          </v-btn>
          <v-btn
            color="primary"
            fill
            @click="addRoutine(true)"
          >
            <span style="color: #1e1e1e">Save</span>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import RoutineButton from "@/components/Routines/RoutineButton";
import NavBar from "@/components/NavBar";
import { RoutinesApi, FetchRoutines } from "@/api/routines";
import router from "@/router";
import Add from "@/components/Routines/add.vue";
import { useRoutinesStore } from "@/store/routinesStore";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store/user";
import {useExerciseStore} from "@/store/exerciseData";
import { useBreadCrumbs } from "@/store/breadCrumbsStore";

export default {
  name: "MyRoutines",
  components: { NavBar, RoutineButton, Add },

  data(){
    return {
      dialog: false,
      routineTitle: "",
      routineDetail:"",
      userId: -1,
      public:false,

    }
  },


  async created() {
    this.cleanAll();
    this.addPage('My Routines',true,'/myRoutines')
    try {
      await this.resetStore();
      this.userId = await this.getUserId();
      console.log(this.userId);
      await this.setRoutines(this.userId);
    } catch (error) {
      router.push("/errorPage");
    }
    console.log(this.routines);
  },
  methods: {
    ...mapActions(useRoutinesStore, ["setRoutines"]),
    ...mapActions(useRoutinesStore, ["nextPage"]),
    ...mapActions(useRoutinesStore, ["previousPage"]),
    ...mapActions(useRoutinesStore, ["resetStore"]),
    ...mapActions(useExerciseStore, ["setRoutine"]),
    ...mapActions(useUserStore, ['getUserId']),
    ...mapActions(useBreadCrumbs,['addPage']),
    ...mapActions(useBreadCrumbs,['cleanAll']),

    nextPageAux(){
      this.nextPage(this.userId);
    },

    previousPageAux(){
      this.previousPage(this.userId);
    },

    toRoutine(mode,id) {
      this.dialog = false;
      this.$router.push({
        name: "createRoutine",
        params: {
          editMode: mode,
          id: id,
          from:'myRoutine'
        },
      });
    },
    addRoutine(mode){
      this.dialog = false;
      console.log(this.public);
      this.setRoutine(this.routineTitle,this.routineDetail,this.public,'');
      this.$router.push({
        name: "createRoutine",
        params: {
          editMode: mode,
          from: 'myRoutinesNew',
        },
      });
    },
  },
  computed: {
    ...mapState(useRoutinesStore, ["routines"]),
    ...mapState(useRoutinesStore, ["page"]),
    ...mapState(useRoutinesStore, ["minPage"]),
    ...mapState(useRoutinesStore, ["maxPage"]),
  },

};
</script>

<style scoped>
h1 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
.routines-title {
  color: #cfffb3;
}

.routines-group {
  padding: 20px;
  justify-content: center;
}

.routine-card {
  padding: 10px;
  cursor: pointer;
}
</style>
