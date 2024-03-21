const Search = () => {
  return (
    <div className=" flex mt-[16px]">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter a domain name to search"
        className="h-[62px] w-[400px] p-[8px] border-[1px] border-[#767676] font-[500] text-lg outline-none "
      />
      <span className="py-[8px] px-[16px] bg-black text-white font-semibold flex items-center justify-center hover:bg-slate-800 transition cursor-pointer">
        Search
      </span>
    </div>
  );
};

export default Search;
