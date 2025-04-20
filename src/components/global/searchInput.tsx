interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    searchTerm: string;
    classname?: string;
    placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    searchTerm,
    classname,
    placeholder,
}) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <div
            className={`w-1/2 max-w-2xl flex items-center gap-2 border border-primary20 py-1  rounded-[10px] px-3 ${classname}`}
        >
            <img src="/search.svg" alt="search icon" />
            <input
                type="text"
                placeholder={placeholder || "Search.."}
                value={searchTerm}
                onChange={handleSearch}
                className=" w-full  outline-none placeholder:text-sm text-primary80 text-base h-[3.125rem]"
            />
        </div>
    );
};
