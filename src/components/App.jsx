import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

const API_KEY = "2a796ea6dc9f2c8546198bb6a5e93a48";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTc5NmVhNmRjOWYyYzg1NDYxOThiYjZhNWU5M2E0OCIsIm5iZiI6MTczNTg0MDEzMC41MzcsInN1YiI6IjY3NzZkMTgyMzYxNWMxYTM3NjEyYWE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiwzrLlrzdTIpH7lYL1JH2rhNlEnzs9w_aIzr1bu148",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-page" element={<MoviesPage />} />
        <Route path="/movies-details-page" element={<MoviesDetailsPage />}>
          <Route path="movie-cast" element={<MovieCast />} />
          <Route path="movie-reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
