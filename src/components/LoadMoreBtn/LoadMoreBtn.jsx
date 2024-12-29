import s from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={s.loadMoreBtnContainer}>
      <button className={s.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
