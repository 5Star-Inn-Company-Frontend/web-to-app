import { fetchMembers } from "@/api/member";
import InviteMembersModal from "@/features/members/InviteMembersModal";
import MembersSearch from "@/features/members/MembersSearch";
import Table from "@/features/members/table";
import TableSkeleton from "@/features/members/TableSkeleton";
import { IMembers } from "@/types/member";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Members = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState("");
    const [filteredMembers, setFilteredMembers] = useState<IMembers[]>([]);

    const { isSuccess, isLoading, data } = useQuery({
        queryKey: ["members"],
        queryFn: () => fetchMembers(),
    });

    const handleSearch = (value: string) => {
        setValue(value);
        const filterMember = data?.data.filter((member: IMembers) => {
            return member.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredMembers(filterMember || []);
    };

    useEffect(() => {
        if (isSuccess) {
            setFilteredMembers(data?.data);
        }
    }, [isSuccess, data?.data]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <>
            <MembersSearch
                openModal={handleOpenModal}
                searchTerm={value}
                onSearch={(value) => handleSearch(value)}
            />
            {isLoading && <TableSkeleton />}
            {isSuccess && <Table members={filteredMembers} />}
            <InviteMembersModal openModal={openModal} closeModal={handleCloseModal} />
        </>
    );
};

export default Members;
