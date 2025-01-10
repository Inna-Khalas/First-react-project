import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import useHttp from "../hooks/useHttp";
import { useEffect, useState } from "react";
import LoadMore from "../components/LoadMore/LoadMore";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [movies, loading, isError] = useHttp(searchMovies, { query, page });

  const handleChange = (newQuery) => {
    if (!newQuery) {
      searchParams.delete("query");
    } else {
      searchParams.set("query", newQuery);
    }
    setSearchParams(searchParams);
    setPage(1);
  };

  useEffect(() => {});

  // const loadMoreHandler = () => {
  // setPage((prevPage) => prevPage + 1);
  // };

  if (isError) {
    return <p>Ошибка загрузки...</p>;
  }

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <SearchBar query={query} handleChange={handleChange} />

      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <>
          {movies?.results && <MovieList movies={movies.results} />}
          <LoadMore onLoadMore={loadMoreHandler} />
        </>
      )}
    </div>
  );
};

export default Movies;
