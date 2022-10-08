<template>
<div>
  <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 20 : 2"
        :class="{ 'on-hover': hover }"
          color="secondary"
          rounded="xl"
          width="300"
          height="200"
      >
          <v-img
              class=""
              height="200px"
              src="@/assets/routine_photo.jpg"
          >
            <v-container>
              <v-row class="justify-center">
                <h1 class="">Leg day</h1>
              </v-row>
              <v-row class=" justify-end">
                <v-icon
                    large
                    color="white"
                    class=""
                >
                  mdi-dots-vertical
                </v-icon>
              </v-row>
            </v-container>
          </v-img>
      </v-card>
  </v-hover>

</div>
</template>

<script>
export default {
  name: "RoutineButton",
  components: {},
  data(){
    return{
      photo:'@/assets/routine_photo.jpg',
      name:''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.card-title{
  color: white;
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  z-index: 2;
}

h1{
  font-family: "Bebas Neue";
  color: white;
}
</style>