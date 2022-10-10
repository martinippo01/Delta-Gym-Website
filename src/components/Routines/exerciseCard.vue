<template>
  <div class="card">
    <v-card  height="100%" color="secondary"  rounded="xl">
        <v-card-title >
          <span>{{this.exerciseName}}</span>

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
                <v-icon color=" primary">mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>

            <v-list >
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-title><v-btn @click="deleteMe">{{ item.title }}</v-btn></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-actions class="mt-0">
            <v-text-field class="ml-" prepend-icon="mdi-alarm" label="Mins" @keypress="filter" v-model="time" @blur="update_time" dark color="primary"></v-text-field>
            <v-text-field class="textField" prepend-icon="mdi-dumbbell" label="Kg" @keypress="filter" v-model="weight" @blur="update_weight" dark color="primary"></v-text-field>
            <v-text-field class="textField" label="SETS" @keypress="filter" v-model="sets" @blur="update_sets" dark color="primary"></v-text-field>
            <v-text-field class="textField" label="REPS" @keypress="filter" v-model="reps" @blur="update_reps" dark color="primary"></v-text-field>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import {mapActions} from 'pinia'
  import {useExerciseStore} from "@/store/exerciseData"
  export default {

    name: "exerciseCard",

    data(){
      return{
        items:[{title:'editar'},{title:'eliminar'}],
        time:'',
        weight:'',
        sets:'',
        reps:'',
      }
    },
    props:{
      id: undefined,
      type:String,
      exerciseName:String,
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
      },
        ...mapActions(useExerciseStore,['addExercise']),
        ...mapActions(useExerciseStore,['deleteExercise']),
        ...mapActions(useExerciseStore,['updateName']),
        ...mapActions(useExerciseStore,['updateTime']),
        ...mapActions(useExerciseStore,['updateWeight']),
        ...mapActions(useExerciseStore,['updateReps']),
        ...mapActions(useExerciseStore,['updateSets']),
      deleteMe(){
        this.deleteExercise(this.id);
      },
      update_name() {
        this.updateName(this.id,this.exerciseName);
      },
      update_time(){
        this.updateTime(this.id,this.time);
      },
      update_weight(){
        this.updateWeight(this.id,this.weight);
      },
      update_reps(){
        this.updateReps(this.id,this.reps);
      },
      update_sets(){
        this.updateSets(this.id,this.sets);
      }
    },

    watch:{

    },

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