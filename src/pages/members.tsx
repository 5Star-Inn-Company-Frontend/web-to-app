import { fetchMembers } from "@/api/member";
import InviteMembersModal from "@/features/members/InviteMembersModal";
import MembersSearch from "@/features/members/MembersSearch";
import Table from "@/features/members/table";
import TableSkeleton from "@/features/members/TableSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Members = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState("collaborator");

    const { isSuccess, isLoading, data } = useQuery({
        queryKey: ["members"],
        queryFn: () => fetchMembers(),
    });

    const handleSearch = () => {
        console.log(value);
        setValue("admin");
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <>
            <MembersSearch openModal={handleOpenModal} search={handleSearch} />
            {isLoading && <TableSkeleton />}
            {isSuccess && <Table users={data?.data} />}
            <InviteMembersModal openModal={openModal} closeModal={handleCloseModal} />
        </>
    );
};

export default Members;
