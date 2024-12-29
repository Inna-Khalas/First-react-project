import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, onImageClick }) {
  if (!images.length) return null;

  return (
    <div className={s.galleryContainer}>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.galleryItem}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
