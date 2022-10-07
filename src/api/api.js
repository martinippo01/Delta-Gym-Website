export { Api };

class Api {
  static token;

  //aca 127.0.0.0.1 = localhost,
  //esto setea donde vive la api y su puerto
  static get baseUrl() {
    return "http://127.0.0.1:8080/api";
  }

  static get timeout() {
    return 60 * 1000;
  }

  /* todo lo que no esta comentado medio que va mas alla, es un manejo de errores */
  static async fetch(url, secure, init = {}, controller) {
    if (secure && Api.token) {
      if (!init.headers) init.headers = {};

      init.headers["Authorization"] = `bearer ${Api.token}`;
    }

    controller = controller || new AbortController();
    init.signal = controller.signal;
    const timer = setTimeout(() => controller.abort(), Api.timeout);

    try {
      //hago el fetch de mi url con los parametros correspondientes
      const response = await fetch(url, init);
      //parseo la response como texto (notar el await porque es una promise)
      const text = await response.text();
      //luego lo paso a objeto! (lo hago asi ya que si texto vacio me da una
      //una string vacia y no un onjeto vacio)
      const result = text ? JSON.parse(text) : {};
      if (result.code) throw result;
      return result;
    } catch (error) {
      if (error.code) throw error;
      if (error.name === "AbortError")
        throw { code: 98, description: error.message.toLowerCase() };
      else if (error.name === "TypeError")
        throw { code: 99, description: error.message.toLowerCase() };
    } finally {
      clearTimeout(timer);
    }
  }

  /* wrapper de fetch que ya maneja errores y seguridad */
  static async get(url, secure, controller) {
    return await Api.fetch(url, secure, {}, controller);
  }

  /* wrapper de fetch para hacer un post facilmente */
  static async post(url, secure, data, controller) {
    return await Api.fetch(
      url,
      secure,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      },
      controller
    );
  }

  /* wrapper de put para hacer un post facilmente */
  static async put(url, secure, data, controller) {
    return await Api.fetch(
      url,
      secure,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      },
      controller
    );
  }

  /* wrapper de delete para hacer un post facilmente */
  static async delete(url, secure, controller) {
    return await Api.fetch(
      url,
      secure,
      {
        method: "DELETE",
      },
      controller
    );
  }
}
