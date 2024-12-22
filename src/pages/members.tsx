import { SearchBar } from "@/components/global/searchInput"
import Table from "@/components/members/table"
import { useState } from "react"

const users = [
    {
      fullName: 'Emma Opara',
      email: 'Emmy@gmail.com',
      role: 'Collaborator',
      appAccess: 'All',
    },
    {
      fullName: 'John Smith',
      email: 'Johnsmith@example.com',
      role: 'Owner',
      appAccess: 'All',
    },
    {
      fullName: 'Alice Carter',
      email: 'Alicecarter@gmail.com',
      role: 'Owner',
      appAccess: 'All',
    },
  ];

const Members = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleSearch = () => {}

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
  return (
    <>
        <div className="flex justify-between items-center">
            <SearchBar searchTerm="Search for a member" onSearch={handleSearch}/>
            <button onClick={handleOpenModal} className="flex items-center justify-between p-2 border border-primary100 rounded-md  w-[9.625rem]">
              <i className="fa-solid fa-plus"></i>
              <span className="block text-base">Invite member</span>
            </button>
        </div>

        <Table users={users}/>
    </>
  )
}

export default Members