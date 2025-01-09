import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async () => {
    setLoading(true);
    const data = await searchMovies(query);
    if (data) {
      setMovies(data.results);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Введіть назву фільму"
      />
      <button onClick={handleSearch}>Шукати</button>

      {loading ? <p>Завантаження...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
