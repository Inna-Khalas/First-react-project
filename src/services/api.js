import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "2a796ea6dc9f2c8546198bb6a5e93a48";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesData = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch {
    toast.error("Виникла помилка, спробуйте ще раз");
  }
};

export const searchMovies = async (query) => {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const { data } = await axios.get(url);
    return data;
  } catch {
    toast.error("Спробуйте ще раз!");
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch {
    toast.error("Сталась помилка");
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch {
    toast.error("Не вдалося завантажити відгуки");
  }
};
