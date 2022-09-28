<template>
  <div>

      <v-card
          color="secondary"
          rounded="xl"
          max-width="300"
          max-height="300"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/routine_photo.jpg"
        >
          <h1
              class="d-flex justify-center align-center"
          >Leg Day</h1>
        </v-img>
      </v-card>

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
  }
}
</script>

<style scoped>
h1{
  font-family: "Bebas Neue";
}
</style>