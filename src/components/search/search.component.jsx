import { useDispatch } from "react-redux";
import { newSearch } from "../../features/search-bar/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(newSearch(event.target.value));
  };

  return (
    <input
      id="q"
      aria-label="Search pokemon"
      placeholder="Search"
      type="search"
      name="q"
      onChange={onChangeHandler}
    />
  );
};

export default Search;
