import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import useHttp from "../../hooks/useHttp";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, loading, isError] = useHttp(getMovieReviews, movieId);

  if (loading) {
    return <p>Завантаження...</p>;
  }
  if (isError) {
    return <p>Не вдалось завантажити дані про відгуки.</p>;
  }

  const reviewList = reviews?.results || [];

  return (
    <div>
      <h2>Відгуки:</h2>
      {reviewList.length > 0 ? (
        <ul>
          {reviewList.map((review) => (
            <li key={review.id}>
              <p>{review.content || "Відгук без змісту"}</p>
              <p>- {review.author || "Невідомий автор"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Немає відгуків</p>
      )}
    </div>
  );
};

export default MovieReviews;
