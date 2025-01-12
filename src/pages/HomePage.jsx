import { InfinitySpin } from "react-loader-spinner";
import LoadMore from "../components/LoadMore/LoadMore";
import MovieList from "../components/MovieList/MovieList";
import useHttp from "../hooks/useHttp";
import { getMoviesData } from "../services/api";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [moviesData, loading, isError] = useHttp(getMoviesData, page);

  useEffect(() => {
    if (moviesData?.results) {
      setMovies((prevMovies) =>
        page === 1 ? moviesData.results : [...prevMovies, ...moviesData.results]
      );
    }
  }, [moviesData, page]);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hasMoreMovies = moviesData?.page < moviesData?.total_pages;

  if (isError) {
    return <p>Ошибка загрузки...</p>;
  }

  return (
    <div>
      <h1>Популярні фільми</h1>
      {loading && page === 1 ? (
        <InfinitySpin />
      ) : (
        <>
          <MovieList movies={movies} />
          {loading && <InfinitySpin />}
          {!loading && hasMoreMovies && (
            <LoadMore onLoadMore={loadMoreHandler} />
          )}
        </>
      )}
    </div>
  );
}
