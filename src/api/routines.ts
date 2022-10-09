import { Api } from "./api";

export { RoutinesApi, Routine };

class RoutinesApi {
  static getUrl(slug: string) {
    return `${Api.baseUrl}/routines${slug ? `/${slug}` : ""}`;
  }

  //esto deberia tener control verdadero, solo testing
  static async addRoutine(routine: Routine) {
    return await Api.post(RoutinesApi.getUrl(""), false, routine, null);
  }
}

class Routine {
  constructor(
    name: string,
    detail: string,
    difficulty: string,
    isPublic: boolean
  ) {
    this.isPublic = isPublic;
    this.difficulty = difficulty;
    this.name = name;
    this.detail = detail;
  }

  name: string;
  detail: string;
  isPublic: boolean;
  difficulty: string;
}
