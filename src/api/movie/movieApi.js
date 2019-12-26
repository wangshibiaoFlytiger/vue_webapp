import axiosInstance from "./movieRequest";

// 查询movie列表
export const findMovieList = function(params) {
  return axiosInstance({
    url: "/api/movie/findMovieList",
    params: params
  });
};

// 查询某movie
export const getMovie = function(params) {
  return axiosInstance({
    url: "/api/movie/getMovie",
    params: params
  });
};
