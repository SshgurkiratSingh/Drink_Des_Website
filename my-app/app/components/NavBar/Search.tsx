"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="flex flex-row ">
      <BiSearch size={40} />
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24   md:w-auto"
        />
      </div>
    </div>
  );
};

export default Search;
