<template>
  <div class="card">
    <v-card height="100%" color="secondary" rounded="xl">
      <v-card-title>
        <span>{{ this.exerciseName }}</span>

            <v-btn light icon @click="deleteMe" :disabled="!editmode">
              <v-icon color=" primary">mdi-delete</v-icon>
            </v-btn>

      </v-card-title>

      <v-card-actions class="mt-0">
        <v-text-field
          prepend-icon="mdi-alarm"
          label="Seconds"
          @keypress="filter"
          v-model="time"
          @blur="update_time"
          dark
          color="primary"
          :disabled="!editmode"
        ></v-text-field>
        <v-text-field
          class="textField"
          label="Reps"
          @keypress="filter"
          v-model="reps"
          @blur="update_reps"
          dark
          color="primary"
          :disabled="!editmode"
        ></v-text-field>
      </v-card-actions>
      <v-card-actions class="mt-0 pt-0">
        <v-text-field
          prepend-icon="mdi-alarm"
          label="Rest (secs)"
          @keypress="filter"
          v-model="rest"
          @blur="update_rest"
          dark
          color="primary"
          :disabled="!editmode"
        ></v-text-field>
        <v-text-field
          class="textField"
          prepend-icon="mdi-dumbbell"
          label="Kg"
          @keypress="filter"
          v-model="weight"
          @blur="update_weight"
          dark
          color="primary"
          :disabled="!editmode"
        ></v-text-field>
        <v-text-field
          class="textField"
          label="SETS"
          @keypress="filter"
          v-model="sets"
          @blur="update_sets"
          dark
          color="primary"
          :disabled="!editmode"
        ></v-text-field>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useExerciseStore } from "@/store/exerciseData";
export default {
  name: "exerciseCard",

  data() {
    return {
      items: [{ title: "editar" }, { title: "eliminar" }],
      time: "",
      weight: "",
      sets: "",
      reps: "",
      rest: "",
    };
  },
  props: {
    id: undefined,
    type: String,
    exerciseName: String,
    editmode: Boolean,
  },
  methods: {
    filter: function (evt) {
      evt = evt ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    ...mapActions(useExerciseStore, ["addExercise"]),
    ...mapActions(useExerciseStore, ["deleteExercise"]),
    ...mapActions(useExerciseStore, ["updateName"]),
    ...mapActions(useExerciseStore, ["updateTime"]),
    ...mapActions(useExerciseStore, ["updateWeight"]),
    ...mapActions(useExerciseStore, ["updateReps"]),
    ...mapActions(useExerciseStore, ["updateSets"]),
    ...mapActions(useExerciseStore, ["updateRest"]),
    ...mapState(useExerciseStore, ["exercisArray"]),

    deleteMe() {
      this.deleteExercise(this.id);
    },
    update_name() {
      this.updateName(this.id, this.exerciseName);
    },
    update_time() {
      this.updateTime(this.id, parseInt(this.time));
    },
    update_weight() {
      this.updateWeight(this.id, parseInt(this.weight));
    },
    update_reps() {
      this.updateReps(this.id, parseInt(this.reps));
    },
    update_sets() {
      this.updateSets(this.id, parseInt(this.sets));
    },
    update_rest() {
      this.updateRest(this.id, parseInt(this.rest));
    },
  },
  mounted() {
    const aux = this.exercisArray().filter((ex) => ex.indexId === this.id);
    console.log(aux);
    this.sets = aux[0].sets;
    this.reps = aux[0].exerciseInCycle.repetitions;
    this.time = aux[0].exerciseInCycle.duration;
    this.weight = aux[0].weight;
    this.rest = aux[0].rest;
  },
};
</script>

<style scoped>
.textField {
  margin-left: 10px;
  margin-right: 10px;
}
.card {
  width: 350px;
  height: 250px;
}
</style>
