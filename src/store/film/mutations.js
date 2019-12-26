import { SET_FILM } from "@/store/mutation-types";

export default {
  /**
   *
   * 设置film信息
   * @param state
   * @param film
   */
  [SET_FILM](state, film) {
    state.film = film;
  }
};
