import React from "react";
import { BiSearchAlt2 } from "react-icons/bi"
import { BsFilter } from "react-icons/bs";
function SearchBar() {
  return (
    <div className="bg-greenishblue flex py-3 pl-5 items-center gap-3 h-14">
      <div className="bg-panelbackground flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2 className="text-greenishblue cursor-pointer text-l" />
        </div>
        <div>
          <input type="text"
            placeholder="Search or start a new chat"
            className="bg-transparent text-sm focus:outline-none text-white w-full"
          />
        </div>
      </div>
      <div className="pr-5 pl-3">
        <BsFilter className="text-white cursor-pointer text-l" />
      </div>
    </div>
  );
}

export default SearchBar;
