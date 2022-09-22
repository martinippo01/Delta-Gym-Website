<template>

  <v-app>

    <TopBar/>
    <v-main class="background">
      <v-container >
        <v-row class="mt-5">
          <v-col class="d-flex justify-center align-center" >
            <v-img src="@/assets/Logo.png"   max-height="116" max-width="124"/>
          </v-col>
        </v-row>
        <v-row class="mt-3" >
          <v-col  class="d-flex justify-center align-center" style="align-items: center" >
            <v-sheet
                color="secondary"
                height="460"
                width="500"
                rounded="xl"
                style="align-items: center"

            >
              <v-container>
                <v-row justify="end">
                  <v-text-field class="pt-10 pr-10 pl-10" label="Full Name" />
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-5 pr-10 pl-10" label="Email" />
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-5 pr-10 pl-10" label="Password" />
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-5 pr-10 pl-10" label="Confirm Password" />
                </v-row>
                <v-row justify="end">
                  <v-text-field class="pt-5 pr-10 pl-10" label="Age" />
                </v-row>
                <v-row justify="center">
                  <v-btn
                      :disabled="loading"
                      color="primary"
                      plain
                      class="temp"

                  >
                    REGISTER
                  </v-btn>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>


</template>

<script>
import TopBar from "@/components/logIn/TopBar.vue";
export default {
  name: "SingUp",
  components:{TopBar}
}
</script>

<style scoped>
.temp {
  border: thin solid #CFFFB3;
  background-color: #343434;
}
</style>