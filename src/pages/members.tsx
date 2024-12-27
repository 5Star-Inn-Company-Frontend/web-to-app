import { SearchBar } from "@/components/global/searchInput"
import Modal from "@/components/Modal";
import InviteMembersModal from "@/features/members/InviteMembersModal";
import MembersSearch from "@/features/members/MembersSearch";
import Table from "@/features/members/table"
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
  const [value, setValue] = useState("collaborator")

  const handleSearch = () => { }

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)
  return (
    <>
      <MembersSearch openModal={handleOpenModal} search={handleSearch} />
      <Table users={users} />
      <InviteMembersModal openModal={openModal} closeModal={handleCloseModal} />
    </>
  )
}

export default Members