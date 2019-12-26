import { SET_FILM } from "@/store/mutation-types";
import { getMovie } from "@/api/movie/movieApi";

export default {
  /**
   * 查询某film
   */
  async getFilm({ commit }, { filmId }) {
    // 请求api
    let resp = await getMovie({
      movieId: filmId
    });
    let film = resp.data.data;

    // 调用mutation方法, 存储film状态
    commit(SET_FILM, film);

    console.log(filmId, film);
    return film;
  }
};
