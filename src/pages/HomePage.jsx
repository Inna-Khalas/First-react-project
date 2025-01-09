import { useEffect, useState } from "react";
import { getMoviesData } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesData();
      if (data) {
        setMovies(data.results);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Популярні фільми</h1>
      {loading ? <p>Завантаження...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
