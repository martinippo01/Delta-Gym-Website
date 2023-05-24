import {defineStore} from "pinia";
import {Routine,RoutinesApi} from "@/api/routines";
import {CyclesApi} from "@/api/cycles";
import {Exercise} from "@/store/exerciseData";
import { exerciseApi } from "@/api/exercises";
import {ExerciseCycle} from "@/store/createRoutine";

export const useEditeRoutine = defineStore('createRoutine', {
  state: () =>({
    id:0,
    name:undefined,
    exercises:[] as editExerciseObj [],
    cycleIds:[] as any []

  }),
  getters:{
    getCoolDownExercises(state){
      return this.exercises.filter(ex => ex.cycleId=== this.cycleIds[2]);
    },
    getWarmUpExercises(state){
      return this.exercises.filter(ex => ex.cycleId=== this.cycleIds[0]);
    },
    getMainSetExercises(state){
      return this.exercises.filter(ex => ex.cycleId=== this.cycleIds[1]);
    },
  },
  actions:{







  }
})
class editExerciseObj{
  exercise: any;
  indexId:number;
  cycleId:number;
  exerciseInCycle:ExerciseCycle
  constructor(indexId:number,cycleId:number,exercise:any,exerciseInCycle:ExerciseCycle) {
    this.cycleId=cycleId;
    this.indexId=indexId;
    this.exercise = exercise;
    this.exerciseInCycle = exerciseInCycle;
  }

}