import LoadMore from "../components/LoadMore/LoadMore";
import MovieList from "../components/MovieList/MovieList";
import useHttp from "../hooks/useHttp";
import { getMoviesData } from "../services/api";
import { useState } from "react";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, loading, isError] = useHttp(getMoviesData, page);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isError) {
    return <p>Ошибка загрузки...</p>;
  }

  return (
    <div>
      <h1>Популярні фільми</h1>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <>
          <MovieList movies={movies?.results || []} />
          <LoadMore onLoadMore={loadMoreHandler} />
        </>
      )}
    </div>
  );
}
