import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";
import useHttp from "../../hooks/useHttp";

function MovieCast() {
  const { movieId } = useParams();

  const [cast, loading, isError] = useHttp(getMovieCast, movieId);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (isError) {
    return <p>Не вдалося завантажити дані про акторів.</p>;
  }

  return (
    <div>
      <h2>Акторський склад:</h2>
      {cast?.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      ) : (
        <p>Дані про акторів відсутні.</p>
      )}
    </div>
  );
}

export default MovieCast;
