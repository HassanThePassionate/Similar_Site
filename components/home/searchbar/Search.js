import style from "./Search.module.css";
const Search = () => {
  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter a domain name to search"
      />
      <span>Search</span>
    </div>
  );
};

export default Search;
