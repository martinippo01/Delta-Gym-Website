<template>
  <div class="card">
  <v-card  height="100%" color="#D9D9D9"  rounded="xl">
    <v-card-title >
      <v-text-field
          label="Insert Name" v-model="exerciseName">
      </v-text-field>


      <v-menu
          ffset-y
          :close-on-click="true"

      >
        <template v-slot:activator="{on ,attrs}">
          <v-btn
              light
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>

        <v-list >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-actions class="mt-0">
        <v-text-field class="ml-" prepend-icon="mdi-alarm" label="Mins" @keypress="filter" v-model="time"></v-text-field>
        <v-text-field class="textField" prepend-icon="mdi-dumbbell" label="Kg" @keypress="filter" v-model="weight"></v-text-field>
        <v-text-field class="textField" label="SETS" @keypress="filter" v-model="sets"></v-text-field>
        <v-text-field class="textField" label="REPS" @keypress="filter" v-model="reps"></v-text-field>
  </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import { store } from "@/store/user";

export default {

  name: "exerciseCard",

  data(){
    return{
      items:[{title:'editar'},{title:'eliminar'}],
      exerciseName:'',
      time:'',
      weight:'',
      sets:'',
      reps:'',
    }
  },
  props:{
    id: undefined,
  },
  methods: {
    filter: function (evt) {
      evt = (evt) ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  watch:{
    exerciseName(newExerciseName) {
        store.addExercise(this.id,newExerciseName);
    }
  }
}
</script>

<style scoped>
.textField{
  margin-left: 10px;
  margin-right: 10px;
}
.card{
  width: 300px;
  height: 200px;
}
</style>