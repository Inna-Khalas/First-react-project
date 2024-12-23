import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        <span className={s.searchTitle}>Find contact by name:</span>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={s.searchInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
