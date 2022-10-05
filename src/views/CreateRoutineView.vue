<template>
  <div id="app">
    <v-app>
      <MainTopBar select="myRoutines"></MainTopBar>
      <v-main class="background">
        <v-sheet class="mx-auto sheet" color="secondary" rounded="xl">
          <v-row class="d-flex">
            <!--              <div class="text-h2 routines-title top-0 start-100" >my routines</div>-->
            <v-col class="d-flex ml-7">
              <v-text-field
                label="ROUTINE NAME"
                :rules="[() => !!routineName || 'This field is required']"
                class="textField"
                v-model="routineName"
              ></v-text-field>
              <!--   <v-icon class="ml-4" color="#D9D9D9">mdi-alarm</v-icon>
            <h4 > TIEMPO</h4> -->
            </v-col>
            <v-col class="justify-end d-flex" md="2" offset-md="3">
              <v-btn
                :disabled="loading"
                color="primary"
                plain
                class="temp justify-end mr-7"
                @click="discard"
              >
                DISCARD
              </v-btn>
              <v-btn
                :disabled="loading"
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
            ></v-text-field>
          </v-row>
        </v-sheet>
        <div class="slider">
          <h1 class="textSlider">WARM UP</h1>
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="card in warmUpList" :key="card.number">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
              <button @click="addRoutine('warmUp')">
                <addButtom></addButtom>
              </button>
            </v-slide-item>
          </v-slide-group>
        </div>
        <div class="slider">
          <h1 class="textSlider">MAIN SETS</h1>
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="card in mainSetList" :key="card.number">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
              <button @click="addRoutine('mainSet')">
                <addButtom></addButtom>
              </button>
            </v-slide-item>
          </v-slide-group>
        </div>
        <div class="slider">
          <h1 class="textSlider">COOL DOWN</h1>
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="card in coolDownExercises"  :key="card.number">
              <exerciseCard
                class="ma-3 position-absolute top-0 start-100 translate-middle" :id="card.number"
              ></exerciseCard>
            </v-slide-item>
            <v-slide-item>
                  <button @click="addRoutine('coolDown')">
                    <addButtom></addButtom>
                  </button>
            </v-slide-item>
          </v-slide-group>

        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import exerciseCard from "@/components/Routines/exerciseCard";
import MainTopBar from "@/components/MainTopBar";
import router from "@/router";
import addButtom from "@/components/Routines/add"
import { store } from "@/store/user";
export default {
  name: "CreateRoutuneView",
  components: { MainTopBar, exerciseCard ,addButtom},
  data() {
    return {
      routineName: "",
      exercise:[{number:1,exerciseType:"coolDown"}],

    };
   },
   methods: {
    discard() {
     router.push("/myRoutines");

    },
     save(){
      console.log( store.getExercises());
       //router.push("/myRoutines");

     },
     addRoutine( type){
       this.exercise.push({number: this.exercise[this.exercise.length -1].number+1 , exerciseType: type});
     }
  },
  computed:{
    coolDownExercises(){
      return this.exercise.filter(ex => ex.exerciseType === "coolDown")

    }
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
  font-family: "Bebas Neue";
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
}
</style>
