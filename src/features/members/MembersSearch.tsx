import { SearchBar } from "@/components/global/searchInput";

interface MembersSearchProps {
    openModal: () => void;
    onSearch: (value: string) => void;
    searchTerm: string;
}

const MembersSearch = ({ openModal, onSearch, searchTerm }: MembersSearchProps) => {
    return (
        <div className="flex gap-y-4 xl:justify-between xl:items-center">
            <SearchBar
                placeholder="Search for a member"
                searchTerm={searchTerm}
                onSearch={(value) => onSearch(value)}
            />
            <button
                onClick={openModal}
                className="flex items-center justify-between p-2 border border-primary100 rounded-md w-full  xl:w-[9.625rem]"
            >
                <i className="fa-solid fa-plus"></i>
                <span className="block text-base">Invite member</span>
            </button>
        </div>
    );
};

export default MembersSearch;
