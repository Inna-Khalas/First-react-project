import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { searchMovies } from "../services/api";

function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await searchMovies(movieId);
      if (data) {
        setMovieDetails(data);
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      {movieDetails && (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>

          <nav>
            <Link to="cast">Акторський склад</Link>
            <Link to="reviews">Відгуки</Link>
          </nav>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default MoviesDetailsPage;
