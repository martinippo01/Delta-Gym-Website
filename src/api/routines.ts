import { Api } from "./api";

export { RoutinesApi, Routine, FetchRoutines };

class RoutinesApi {
  static getUrl(slug: string) {
    return `${Api.baseUrl}/routines${slug ? `/${slug}` : ""}`;
  }

  static async addRoutine(routine: Routine) {
    return await Api.post(RoutinesApi.getUrl(""), true, routine, null);
  }

  // static async getRoutine(routineId: number) {
  //   return await Api.post(
  //     RoutinesApi.getUrl(routineId.toString()),
  //     true,
  //     {},
  //     null
  //   );
  // }

  static async getAllRoutines() {
    return await Api.get(RoutinesApi.getUrl(""), true, {});
  }
}

class FetchRoutines {
  constructor(
    orderBy: string,
    isPublic: boolean,
    difficulty: string,
    detail: string,
    name: string
  ) {
    this.isPublic = isPublic;
    this.orderBy = orderBy;
    this.difficulty = difficulty;
    this.detail = detail;
    this.name = name;
  }

  difficulty: string;
  detail: string;
  name: string;
  isPublic: boolean;
  orderBy: string;
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
