import { SearchIcon } from "../icons/SearchIcon";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    searchTerm: string;
    classname?: string
  }
  
  export const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    searchTerm,
    classname
  }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    };
  
    return (
      <div className={`max-w-md flex items-center gap-2 border border-gray1 rounded-[10px] px-3 ${classname}`}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for an app"
          value={searchTerm}
          onChange={handleSearch}
          className=" w-full  outline-none placeholder:text-sm text-gray1 text-base"
        />
      </div>
    );
  };
  