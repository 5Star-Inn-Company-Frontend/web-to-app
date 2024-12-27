import { SearchBar } from "@/components/global/searchInput"

interface MembersSearchProps {
    openModal: () => void;
    search: () => void;
}

const MembersSearch = ({ openModal, search }: MembersSearchProps) => {
    return (
        <div className="flex justify-between items-center">
            <SearchBar searchTerm="Search for a member" onSearch={search} />
            <button onClick={openModal} className="flex items-center justify-between p-2 border border-primary100 rounded-md  w-[9.625rem]">
                <i className="fa-solid fa-plus"></i>
                <span className="block text-base">Invite member</span>
            </button>
        </div>
    )
}

export default MembersSearch
