import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
