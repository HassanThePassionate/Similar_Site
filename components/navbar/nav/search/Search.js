import style from "./search.module.css";

const Search = () => {
  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="What can we Help with?"
      />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
    </div>
  );
};

export default Search;
