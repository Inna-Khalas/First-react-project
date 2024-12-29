import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const KEY = "Mendu8P0loV10VDPyIOlvXXGbvDhii94Y8i8fiYjh1s";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [noResults, setNoResults] = useState(false);

  const fetchImages = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setNoResults(false);

    try {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query,
            page,
            per_page: 15,
            client_id: KEY,
          },
        }
      );

      if (data.results.length === 0) {
        setNoResults(true);
      }

      setImages((prev) => [...prev, ...data.results]);
      setHasMore(data.results.length > 0);
    } catch {
      setError("Щось пішло не так, перезавантажте сторінку!");
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearch = useCallback((searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Заповніть поле пошуку!");
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setHasMore(true);
    setNoResults(false);
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {noResults && !loading && <p>За вашим запитом нічого не знайдено.</p>}
      {hasMore && !loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}
