import { Api } from "@/api/api";
import { ExerciseAPiType } from "@/store/exerciseData";

export { exerciseApi };
class exerciseApi {
  static getUrl(slug?: string) {
    return `${Api.baseUrl}/exercises${slug ? `/${slug}` : ""}`;
  }
  /*
    Lo que voy a hacer es subir todos los ejercicios y guardarme el id del mismo
  */
  static async uploadExercises(exercise: ExerciseAPiType) {
    return await Api.post(exerciseApi.getUrl(), true, exercise, null);
  }

  static async deleteExercises(exercisesId: number) {
    return await Api.delete(
      exerciseApi.getUrl(exercisesId.toString()),
      true,
      null
    );
  }

  static async updateExercises(exerciseId: number, exercise: ExerciseAPiType) {
    return await Api.put(
      exerciseApi.getUrl(exerciseId.toString()),
      true,
      exercise
    );
  }

  static async modifyExercise(id: number, exercise: ExerciseAPiType) {
    return await Api.put(this.getUrl(id.toString()), true, exercise);
  }
  static async getExercises(page:number) {
    return await Api.get(exerciseApi.getUrl().concat(`?page=${page}`), true, null);
  }
}
