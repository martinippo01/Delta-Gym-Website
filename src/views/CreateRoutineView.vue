<template>
  <div>
    <div id="app">
      <v-app>
        <NavBar select="myRoutines"></NavBar>
        <v-main class="background">
          <!--        _______________________________________________________________________________________-->
          <v-sheet class="mx-auto sheet" color="secondary" rounded="xl">
            <v-row class="d-flex">
              <v-col class="d-flex ml-7">
                <!--              Caso 1 ->  Vista de edicion-->
                <v-text-field
                  label="ROUTINE NAME"
                  :rules="[() => !!routineName || 'This field is required']"
                  class="textField"
                  v-model="routineName"
                  dark
                  height="50"
                  color="primary"
                  v-if="editMode"
                ></v-text-field>
                <!--              Caso 2 -> Vista normal-->
                <h1 v-else>CAMBIAR NOMBRE RUTINA</h1>
              </v-col>
              <v-col class="justify-end d-flex" md="2" offset-md="3">
                <!--              CASO 1 -> Edit mode-->
                <v-btn
                  color="primary"
                  plain
                  class="temp justify-end mr-7"
                  v-if="editMode"
                  @click="discard"
                >
                  DISCARD
                </v-btn>
                <!--              CASO 1 -> Edit mode-->
                <v-btn
                  color="primary"
                  class="temp justify-end mr-7 secondary--text"
                  v-if="editMode"
                  @click="save"
                >
                  SAVE
                </v-btn>
                <!--              CASO 2 -> Vista normal-->
                <v-btn
                  color="primary"
                  class="temp justify-end mr-7 secondary--text"
                  v-if="!editMode"
                  @click="editMode = true"
                >
                  EDIT ROUTINE
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <!--            Caso 1 -> Vista de edicion-->
              <v-textarea
                class="descripcion"
                label="DESCRIPTION"
                color="primary"
                v-model="routineDetail"
                max-
                dark
                v-if="editMode"
              ></v-textarea>
              <!--            Caso 2 -> Vista normal-->
              <p
                v-else
                class="text-justify"
                style="margin: 40px; color: white; margin-bottom: 20px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-row>
          </v-sheet>

          <!--        _______________________________________________________________________________________-->

          <div class="slider">
            <h1 class="textSlider">WARM UP</h1>
            <v-slide-group class="pa-4" active-class="success" show-arrows dark>
              <v-slide-item
                v-for="card in getWarmUpExercises"
                :key="card.indexId"
              >
                <exerciseCard
                  class="ma-3 position-absolute top-0 start-100 translate-middle"
                  :id="card.indexId"
                  type="warmUp"
                  :exerciseName="card.name"
                  :edit-mode="editMode"
                ></exerciseCard>
              </v-slide-item>
              <v-slide-item v-if="editMode">
                <button
                  @click="
                    addRoutine(0);
                    dialogSelectExercise = true;
                  "
                >
                  <addButtom></addButtom>
                </button>
              </v-slide-item>
            </v-slide-group>
          </div>

          <!--        _______________________________________________________________________________________-->

          <div class="slider">
            <h1 class="textSlider">MAIN SETS</h1>
            <v-slide-group class="pa-4" active-class="success" show-arrows dark>
              <v-slide-item
                v-for="card in getMainSetExercises"
                :key="card.indexId"
              >
                <exerciseCard
                  class="ma-3 position-absolute top-0 start-100 translate-middle"
                  :id="card.indexId"
                  type="mainSet"
                  :exerciseName="card.name"
                  :edit-mode="editMode"
                ></exerciseCard>
              </v-slide-item>
              <v-slide-item v-if="editMode">
                <button
                  @click="
                    addRoutine(1);
                    dialogSelectExercise = true;
                  "
                >
                  <addButtom></addButtom>
                </button>
              </v-slide-item>
            </v-slide-group>
          </div>

          <!--        _______________________________________________________________________________________-->
          <div class="slider">
            <h1 class="textSlider">COOL DOWN</h1>
            <v-slide-group class="pa-4" active-class="success" show-arrows dark>
              <v-slide-item
                v-for="card in getCoolDownExercise"
                :key="card.indexId"
              >
                <exerciseCard
                  class="ma-3 position-absolute top-0 start-100 translate-middle"
                  :id="card.indexId"
                  type="coolDown"
                  :exerciseName="card.name"
                  :edit-mode="editMode"
                ></exerciseCard>
              </v-slide-item>
              <v-slide-item v-if="editMode">
                <button
                  @click="
                    addRoutine(2);
                    dialogSelectExercise = true;
                  "
                >
                  <addButtom></addButtom>
                </button>
              </v-slide-item>
            </v-slide-group>
          </div>
        </v-main>
      </v-app>

      <!--    ____________________________________________________________________________-->
      <v-dialog v-model="dialogSelectExercise" persistent max-width="600px">
        <v-card color="background">
          <v-card-title>
            <span class="text-h5" style="color: #cfffb3">Add exercise</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="10" md="8">
                  <v-autocomplete
                    label="Search"
                    required
                    color="primary"
                    dark
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-btn
                    color="primary"
                    @click="
                      dialogSelectExercise = false;
                      dialogCreateExercise = true;
                    "
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
              </v-row>
              <v-row>
                <v-col>
                  <v-virtual-scroll
                    :items="createdExercise"
                    :item-height="50"
                    height="300"
                  >
                    <template v-slot:default="{ item }">
                      <v-list-item :key="item.name">
                        <v-list-item-content>
                          <v-list-item-title>
                            <span style="color: white">{{ item.name }}</span>
                          </v-list-item-title>
                          <v-list-item-subtitle style="color: darkgray">{{
                            item.detail
                          }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn
                            fab
                            small
                            depressed
                            color="primary"
                            @click="deleteExercisesHandler(item)"
                          >
                            <v-icon color="#1e1e1e"> mdi-delete</v-icon>
                          </v-btn>
                        </v-list-item-action>

                        <v-list-item-action>
                          <v-btn
                            fab
                            small
                            depressed
                            color="primary"
                            @click="modifyExercise(item)"
                          >
                            <v-icon color="#1e1e1e"> mdi-wrench</v-icon>
                          </v-btn>
                        </v-list-item-action>

                        <v-list-item-action>
                          <v-btn
                            fab
                            small
                            depressed
                            color="primary"
                            @click="selectExercise(item)"
                          >
                            <v-icon color="#1e1e1e" v-if="selectedName === item"
                              >mdi-check</v-icon
                            >
                            <v-icon color="#1e1e1e" v-else>mdi-plus</v-icon>
                          </v-btn>
                        </v-list-item-action>
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
              @click="
                dialogSelectExercise = false;
                selectedName = null;
              "
            >
              Discard
            </v-btn>
            <v-btn
              color="primary"
              filled
              :disabled="selectedName === null"
              @click="saveExercise"
            >
              <span style="color: #1e1e1e"> Save </span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--    ____________________________________________________________________________-->
      <v-dialog v-model="dialogCreateExercise" persistent max-width="600px">
        <v-card color="background">
          <v-card-title v-if="!dialogCreateExercise">
            <span class="text-h5" style="color: #cfffb3"
              >Create new exercise</span
            >
          </v-card-title>

          <v-card-title v-if="dialogModifyExercise">
            <span class="text-h5" style="color: #cfffb3">Modify exercise</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    dark
                    color="primary"
                    label="Name"
                    v-model="title"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    v-model="detail"
                    label="Description"
                    counter
                    maxlength="120"
                    full-width
                    single-line
                    dark
                    color="primary"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              outlined
              @click="
                dialogCreateExercise = false;
                dialogModifyExercise = false;
                selectedName = null;
              "
            >
              Discard
            </v-btn>
            <v-btn color="primary" filled @click="saveExercise">
              <span style="color: #1e1e1e">Save</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--    ____________________________________________________________________________-->
    </div>
    <v-snackbar v-model="error" color="error">
      {{ errorText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" @click="error = false" outlined> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import exerciseCard from "@/components/Routines/exerciseCard";
import NavBar from "@/components/NavBar";
import router from "@/router";
import addButtom from "@/components/Routines/add";
import { mapState, mapActions, storeToRefs } from "pinia";
import { useExerciseStore } from "@/store/exerciseData";
import { useCreateRoutine } from "@/store/createRoutine";
import { useEditeRoutine } from "@/store/editRoutine";

export default {
  name: "CreateRoutuneView",
  components: { NavBar, exerciseCard, addButtom },
  data() {
    return {
      modifiedExerciseId: 0,
      routineName: "",
      routineDetail: "",
      error: false,
      errorText: "",
      detail: "",
      title: "",
      difficulty: "medium",
      isPublic: true,
      dialogSelectExercise: false,
      dialogCreateExercise: false,
      dialogModifyExercise: false,
      selectedName: null,
      cycleSelect: 0,
      maxId: 0,
      editMode: false,
    };
  },
  methods: {
    ...mapActions(useExerciseStore, ["addExercise"]),
    ...mapActions(useExerciseStore, ["uploadExercises"]),
    ...mapActions(useExerciseStore, ["updateExercises"]),
    ...mapActions(useExerciseStore, ["deleteExercises"]),
    ...mapActions(useExerciseStore, ["getCreatedExercises"]),
    ...mapActions(useCreateRoutine, ["createRoutine"]),
    ...mapActions(useEditeRoutine, ["getRoutineData"]),
    discard() {
      this.editMode = false;
    },
    async save() {
      this.editMode = false;
      try {
        await this.createRoutine(this.routineName, this.routineDetail);
      } catch (error) {
        this.error = true;
        this.errorText = error.name;
      }
    },
    addRoutine(type) {
      this.dialogSelectExercise = true;
      this.cycleSelect = type;
    },
    async saveExercise() {
      if (!this.dialogModifyExercise) this.saveNewExercise();
      else this.saveModifiedExercise();
    },
    async saveModifiedExercise() {
      this.dialogCreateExercise = false;
      this.dialogModifyExercise = false;

      try {
        await this.updateExercises(
          {
            name: this.title,
            detail: this.detail,
            type: "exercise",
            metadata: null,
          },
          this.modifiedExerciseId
        );
        console.log("modified exercise");
        this.getCreatedExercises();
      } catch (error) {
        this.error = true;
        this.errorText = "Couldn't modify exercise";
      }
    },
    async saveNewExercise() {
      this.dialogSelectExercise = false;

      this.dialogSelectExercise = false;
      this.dialogCreateExercise = false;
      this.selectedName = null;
      try {
        await this.uploadExercises(
          {
            name: this.title,
            detail: this.detail,
            type: "exercise",
            metadata: null,
          },
          this.cycleSelect,
          this.maxId
        );
      } catch (error) {
        if (error.code === 99) {
          this.error = true;
          this.errorText = "Connection error";
        } else {
          this.error = true;
          this.errorText = error.errorText;
        }
      }
      this.maxId++;
    },

    selectExercise(item) {
      this.selectedName = item;
      this.title = item.name;
      this.detail = item.detail;
    },
    modifyExercise(item) {
      this.dialogCreateExercise = true;
      this.dialogModifyExercise = true;
      this.title = item.name;
      this.descripcion = item.descripcion;
      this.modifiedExerciseId = item.id;
    },
    async deleteExercisesHandler(item) {
      try {
        this.error = true;
        await this.deleteExercises(item.id);
        this.errorText = "waiting";

      } catch(error) {
          this.error = true;
          this.errorText = "Couldn't delete exercise"; 
      }
      this.error = false;
      this.getCreatedExercises();
    },
  },
  computed: {
    ...mapState(useExerciseStore, ["getCoolDownExercise"]),
    ...mapState(useExerciseStore, ["getMainSetExercises"]),
    ...mapState(useExerciseStore, ["getWarmUpExercises"]),
    ...mapState(useExerciseStore, ["createdExercise"]),
  },
  mounted() {
    // this.getRoutineData(this.$route.params.id)
    this.editMode = this.$route.params.editMode;
    try {
      this.getCreatedExercises();
    } catch (error) {
      this.error = true;
      this.errorText = error.errorText;
    }
  },
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
