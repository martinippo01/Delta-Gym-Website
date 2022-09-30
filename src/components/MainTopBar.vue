<template>
  <v-app-bar color="background"
             elevation="0"
  >
    <v-img
        max-height="60"
        max-width="60"
        src="@/assets/Logo.png"
        class="ma-3 position-absolute top-100 start-100 translate-middle"
    ></v-img>
    <v-spacer></v-spacer>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        :color="select === 'explore' ? 'primary':'topBar'"        plain
    >
      EXPLORE
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        :color="select === 'myRoutines' ? 'primary':'topBar'"
        plain
    >
     MY ROUTINES
    </v-btn>
    <v-btn
        :disabled="loading"
        class="ma-3 position-absolute top-0 start-100 translate-middle"
        :color="select === 'profile' ? 'primary':'topBar'"
        plain
    >
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "MainTopBar",
  props:{
    select: {
      type:String,
      required:true
    }

  },
  data(){
    return{
    }
  },

}
</script>

<style scoped>

</style>