<template>
  <v-app class="background">
    <NavBar select="" />
    <v-main class="background">

      <v-card
          style="margin-top: 10px"
      >
        <v-img
            src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            max-height="900"
            gradient="to top , rgba(30,30,30,0.2), rgba(30,30,30,1)"
        >
          <v-sheet
              style="position: absolute; margin-left: 20%; margin-top: 100px"
              min-width="500"

              height="500"
              rounded="xl"
              color="rgb(30, 30, 30, 0)"
              elevation=""
          >
            <v-row justify="center">
              <v-col cols="6">
                <v-row>
                  <h1 style="color: #CFFFB3; font-family: 'Bebas Neue'; font-size: 120px; margin-left: 50px; margin-top: 250px">Delta</h1>
                </v-row>
                <v-row>
                  <h2 style="color: white; font-family: 'Bebas Neue'; font-size: 40px; margin-left: 50px">Track your workouts, measure your progress and stay motivated</h2>
                </v-row>
              </v-col>
              <v-col
                  cols="6"
              >
                <v-img src="@/assets/googlePlay.png" style="margin-top: 160px; margin-left: 50px" width="400" ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-img>
      </v-card>
      <!--_______________________________________________________________________________________________--->

      <v-sheet
          color="background"
          style=" background-image: linear-gradient(to right bottom, #1e1e1e, rgba(207, 255, 179, 0.3));"
      >
        <v-row justify="center">
          <v-col cols="12">

              <h1 style="color: #CFFFB3; font-family: 'Bebas Neue'; font-size: 70px; margin-left: 90px; margin-top: 150px"> WHAT MAKES US DIFFERENT?</h1>

              <h2 style="color: white; font-family: 'Bebas Neue'; font-size: 30px;  margin-left:90px">With our unique Delta system, every workout will be different - See Improvement from day one.</h2>

            <v-img
                src="@/assets/inWorkout.png"
                width="400"
                height="800"
                style="margin-left: auto; margin-right: auto; scale: 0.6;"
            ></v-img>
          </v-col>
        </v-row>

      </v-sheet>

      <!--_______________________________________________________________________________________________--->


      <template>
        <v-parallax
            dark
            src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height="350"
        >
          <v-sheet
              style="position: absolute; margin-left: auto; margin-top: 0"
              max-width="1000"
              height="300"
              rounded="xl"
              color="rgb(30, 30, 30, 0.5)"
              elevation=""
          >
            <v-row justify="center">

              <v-row>
                <h1 style="color: #CFFFB3; font-family: 'Bebas Neue'; font-size: 100px; margin-left: 50px; margin-top: 40px; margin-right: 20px">PROGRESS, SHUFFLE, SKIP</h1>
              </v-row>
              <v-row>
                <h2 style="color: white; font-family: 'Bebas Neue'; font-size: 30px; margin-left: 50px; margin-right: 20px">Let the app adapt to yourself: Shuffle exercises, skip, record - See the whole picture</h2>
              </v-row>

            </v-row>
          </v-sheet>
        </v-parallax>
      </template>


      <!--_______________________________________________________________________________________________--->

      <v-sheet
          color="background"
          style=" background-image: linear-gradient(to bottom right, #1e1e1e, rgba(207, 255, 179, 0.3));"

      >
        <v-row justify="center">
          <v-col cols="12">
            <v-row>
              <h1 style="color: #CFFFB3; font-family: 'Bebas Neue'; font-size: 70px; margin-left: auto; margin-right: auto; margin-top: 100px"> Explore, Create</h1>
            </v-row>
            <v-row>
              <h2 style="color: white; font-family: 'Bebas Neue'; font-size: 30px;  margin-left: auto; margin-right: auto">Explore our selection of routines or create your own with our unique delta tracking.</h2>
            </v-row>
            <v-row>
              <router-link style="text-decoration: none; color: inherit; margin-left: auto; margin-right: auto" to="/explore">
                <v-btn
                    x-large
                    outlined
                    color="primary"
                    style="outline-color: #CFFFB3; margin-right: auto; margin-left: auto; margin-top: 20px"
                >
                  <span style="color: #CFFFB3">Explore Routines<v-icon>mdi-chevron-right</v-icon></span>
                </v-btn>
              </router-link>
            </v-row>
            <v-img
                src="@/assets/postWorkoutv2.png"
                max-width="600"
                style="margin-left: auto; margin-right: auto"
            ></v-img>
          </v-col>
        </v-row>

      </v-sheet>


    </v-main>

  </v-app>

<!--  <v-app>-->
<!--    <NavBar select="" />-->

<!--    <div class="landing">-->
<!--      <LandingScreen>-->
<!--        <template #title> DELTA </template>-->
<!--        <template #body>-->
<!--          TRACK YOUR WORKOUTS, MEASURE YOUR PROGRESS AND, STAY MOTIVATED-->
<!--        </template>-->
<!--        <template #img>-->
<!--          <img src="../assets/postWorkout.png" />-->
<!--        </template>-->
<!--      </LandingScreen>-->

<!--      <LandingScreen>-->
<!--        <template #title> WHAT MAKES US DIFFERENT </template>-->
<!--        <template #body>-->
<!--          WITH OUR UNIQUE DELTA SYSTEM EVERY WORKOUT WILL BE DIFFERENT—SEE-->
<!--          IMPROVEMENT FROM DAY ONE.-->
<!--        </template>-->
<!--        <template #img>-->
<!--          <img src="../assets/postWorkout.png" />-->
<!--        </template>-->
<!--      </LandingScreen>-->

<!--      <LandingScreen>-->
<!--        <template #title> PROGRESS, SHUFFLE, SKIP </template>-->
<!--        <template #body>-->
<!--          LET THE APP ADAPT TO YOURSELF: SHUFFLE EXERCISES, SKIP, RECORD—SEE THE-->
<!--          WHOLE PICTURE-->
<!--        </template>-->
<!--        <template #img>-->
<!--          <img src="../assets/inWorkout.png" />-->
<!--        </template>-->
<!--      </LandingScreen>-->

<!--      <LandingScreen>-->
<!--        <template #title> EXPLORE, CREATE </template>-->
<!--        <template #body>-->
<!--          EXPLORE OUR SELECTION OF ROUTINES OR CREATE YOUR OWN WITH OUR UNIQUE-->
<!--          DELTA TRACKING-->
<!--        </template>-->
<!--        <template #img>-->
<!--          <v-btn> EXPLORE ROUTINES </v-btn>-->
<!--        </template>-->
<!--      </LandingScreen>-->
<!--    </div>-->
<!--  </v-app>-->
</template>

<script>
import LandingScreen from "../components/LandingScreen.vue";
import NavBar from "../components/NavBar.vue";
import { mapActions } from "pinia";
import { useBreadCrumbs } from "@/store/breadCrumbsStore";

export default {
  name: "LandingPage",
  components: {
    NavBar,
  },
  mounted() {
    this.cleanAll();
  },
  methods:{
    ...mapActions(useBreadCrumbs,['cleanAll'])
  }
};
</script>

<style scoped>
.landing {
  background-color: black;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>
