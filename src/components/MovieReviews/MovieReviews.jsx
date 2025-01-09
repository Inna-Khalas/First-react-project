import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getMovieReviews(movieId);
      if (data) {
        setReviews(data.results);
      }
      setLoading(false);
    };
    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      <h2>Відгуки</h2>
      {reviews.length === 0 ? (
        <p>Немає відгуків</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p>- {review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
