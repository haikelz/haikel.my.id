import { block } from "million/react";
import { SetStateAction } from "react";
import { cxm } from "~lib/helpers";
import { SearchIcon } from "~ui/svg";

interface SearchInputProps {
  search: string;
  setSearch: (update: SetStateAction<string>) => void;
}

export const SearchInput = block(function SearchInput({ search, setSearch }: SearchInputProps) {
  return (
    <div className="relative my-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </div>
      <input
        className={cxm(
          "block w-full border-[2.5px] border-base-1 bg-white outline-none",
          "px-4 py-1.5 pl-12 font-medium transition-all",
          "focus:shadow-light",
          "dark:border-white dark:bg-base-0 dark:focus:shadow-dark"
        )}
        type="text"
        name="search"
        placeholder="Search Here...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
});
