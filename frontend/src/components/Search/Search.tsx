import React from "react";
import { Input } from "../ui/input";
import { SlidersVertical, Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="  h-11">
      <section className="flex h-full">
        <div className="flex w-full rounded-lg px-3 bg-secondary items-center">
          <SearchIcon size={20} />
          <Input
            placeholder="Search"
            className="bg-transparent border-none outline-none"
          />
        </div>
        <button className="ml-8 bg-primary px-3 rounded-[10px]">
          <SlidersVertical className="text-white" />
        </button>
      </section>
    </div>
  );
};

export default Search;
