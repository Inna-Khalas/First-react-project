import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import "../../../src/index.css";

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="search-bar">
      <span className="search-title">Find contact by name:</span>

      <input
        className="input input-bordered input-primary w-full max-w-xs"
        type="text"
        placeholder="Заповніть поле пошуку"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
