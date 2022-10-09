<template>
  <div id="app">
    <v-app>
      <NavBar select="myRoutines"></NavBar>
      <v-main class="background">


<!--        _______________________________________________________________________________________-->
        <v-sheet class="mx-auto sheet" color="secondary" rounded="xl">
          <v-row class="d-flex">
            <!--              <div class="text-h2 routines-title top-0 start-100" >my routines</div>-->
            <v-col class="d-flex ml-7">
              <v-text-field
                label="ROUTINE NAME"
                :rules="[() => !!routineName || 'This field is required']"
                class="textField"
                v-model="routineName"
                dark
                height="50"
                color="primary"
              ></v-text-field>
              <!--   <v-icon class="ml-4" color="#D9D9D9">mdi-alarm</v-icon>
            <h4 > TIEMPO</h4> -->
            </v-col>
            <v-col class="justify-end d-flex" md="2" offset-md="3">
              <v-btn
                color="primary"
                plain
                class="temp justify-end mr-7"
                @click="discard"
              >
                DISCARD
              </v-btn>
              <v-btn
                color="primary"
                class="temp justify-end mr-7 secondary--text"
                @click="save"
              >
                SAVE
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-text-field
              class="descripcion"
              label="DESCRIPTION"
              color="primary"
              max-
              dark
            ></v-text-field>
          </v-row>
        </v-sheet>


<!--        _______________________________________________________________________________________-->

        <div class="slider">
          <h1 class="textSlider">WARM UP</h1>
          <v-slide-group class="pa-4" active-class="success" show-arrows dark>
            <v-slide-item v-for="card in getWarmUpExercises" :key="card.id">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle"
                :id="card.id"
                type="warmUp"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
              <button @click="addRoutine('warmUp'); dialog = true">
                <addButtom></addButtom>
              </button>
            </v-slide-item>
          </v-slide-group>
        </div>


<!--        _______________________________________________________________________________________-->
        <div class="slider">
          <h1 class="textSlider">MAIN SETS</h1>
          <v-slide-group class="pa-4" active-class="success" show-arrows dark>
            <v-slide-item v-for="card in getMainSetExercises" :key="card.id">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle"
                :id="card.id"
                type="mainSet"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
              <button @click="addRoutine('mainSet'); dialog = true">
                <addButtom></addButtom>
              </button>
            </v-slide-item>
          </v-slide-group>
        </div>


<!--        _______________________________________________________________________________________-->
        <div class="slider">
          <h1 class="textSlider">COOL DOWN</h1>
          <v-slide-group class="pa-4" active-class="success" show-arrows dark>
            <v-slide-item v-for="card in getCoolDownExercise" :key="card.id">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle"
                :id="card.id"
                type="coolDown"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
              <button @click="addRoutine('coolDown'); dialog = true">
                <addButtom></addButtom>
              </button>
            </v-slide-item>
          </v-slide-group>

        </div>
      </v-main>
    </v-app>


<!--    ____________________________________________________________________________-->
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card
        color="secondary"
      >
        <v-card-title>
          <span class="text-h5" style="color: #CFFFB3">Add exercise</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="10"
                md="8"
              >
                <v-autocomplete
                  label="Search"
                  required
                  color="primary"
                  dark
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-btn
                  color="primary"
                >
                  <span style="color: #1e1e1e">Create New</span>
                </v-btn>
              </v-col>
              <v-col>
                <v-autocomplete
                  :items="createdExercise"
                  item-text="name"
                  dense
                  chips
                  small-chips
                  label="Tags"
                  multiple
                  solo
                  color="secondary"
                  background-color="secondary"
                ></v-autocomplete>
              </v-col>
              <v-col>
                <v-virtual-scroll
                  :items="createdExercise"
                  :item-height="50"
                  height="300"
                >
                  <template v-slot:default="{ item }">
                    <v-list-item>
                      {{item.name}}
                    </v-list-item>
                  </template>
                </v-virtual-scroll>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
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
            filled
            @click="dialog = false"
          >
            <span style="color: #1e1e1e">Save</span>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
<!--    ____________________________________________________________________________-->
  </div>
</template>

<script>
import exerciseCard from "@/components/Routines/exerciseCard";
import NavBar from "@/components/NavBar";
import router from "@/router";
import addButtom from "@/components/Routines/add";
import { mapState, mapActions, storeToRefs } from "pinia";
import { useExerciseStore } from "@/store/exerciseData";
import { RoutinesApi, Routine } from "@/api/routines";

export default {
  name: "CreateRoutuneView",
  components: { NavBar, exerciseCard, addButtom },
  data() {
    return {
      routineName: "",
      maxId:1,
      error:false,
      errorText:"",
      detail: "none",
      difficulty: "medium",
      isPublic: true,
      dialog: false,
    };
   },
   methods: {
    ...mapActions(useExerciseStore,['addExercise']),
     ...mapActions(useExerciseStore,['upLoadExercises']),
      ...mapActions(useExerciseStore,['getCreatedExercises']),
     discard() {
     router.push("/myRoutines");

    },
     async save(){
       try {
       await this.upLoadExercises();
       router.push("/myRoutines");
     }catch (error){
       this.error = true;
       this.errorText = error.name;
     }

     },
      addRoutine( type){
        this.dialog = true;
       //this.addExercise(this.maxId, type);
        //this.getExercises();
       this.maxId++;
     },

   },
  computed:{
    ...mapState(useExerciseStore,['getCoolDownExercise']),
    ...mapState(useExerciseStore,['getMainSetExercises']),
    ...mapState(useExerciseStore,['getWarmUpExercises']),
    ...mapState(useExerciseStore,['createdExercise']),
  },
  created() {
    this.getCreatedExercises();
  }


};
</script>

<style scoped>
.temp {
  border: thin solid #cfffb3;
  background-color: #343434;
}
h1,
h4 {
  color: #cfffb3;
  font-family: "Bebas Neue";
}
.textSlider {
  margin-left: 75px;
  margin-top: 20px;
}
.routines-title {
  color: #cfffb3;
}
.slider {
  max-width: 77%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  border: 2px solid #4b4b4b;
  border-radius: 30px;
  margin-top: 40px;
}
.descripcion {
  margin-left: 40px;
  max-width: 95%;
  font-family: "Roboto";
  color: #d9d9d9;
}
.sheet {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 20px;
}
.textField {
  max-width: 350px;
  font-size: 40px;
  font-family: "Bebas Neue";
}
</style>
