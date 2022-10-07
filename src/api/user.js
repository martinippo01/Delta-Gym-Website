import { Api } from "./api.js";

export { UserApi, Credentials };

class UserApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/users${slug ? `/${slug}` : ""}`;
  }

  /* aca la clave esta en que le agrego al url el slug login debido a que
   * la api me pide ese url para manejar el login! */
  static async login(credentials, controller) {
    return await Api.post(
      UserApi.getUrl("login"),
      false,
      credentials,
      controller
    );
  }

  static async addUser(registration, controller) {
    await Api.post(UserApi.getUrl("user"), false, registration, controller);
  }

  static async logout(controller) {
    await Api.post(UserApi.getUrl("logout"), true, controller);
  }

  static async get(controller) {
    return Api.get(UserApi.getUrl("current"), true, controller);
  }
}

class Registration {
  constructor(name, password) {
    //queda agregar todos los argumentos y nullear los que no se usan actualmente
  }
}

class Credentials {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
