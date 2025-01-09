import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await getMovieCast(movieId);
      if (data) {
        setCast(data.cast);
      }
      setLoading(false);
    };
    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      <h2>Акторський склад:</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
