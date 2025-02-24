import { Navbar } from "@/components/Navbar";
import MemberForm from "./MemberForm";
import ChangePassword from "./ChangePassword";
import Organization from "./Organization";
import MemberAction from "./MemberAction";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { IMember, IUser } from "@/types/type";

const MemberAccount = () => {
    const { id } = useParams();

    const queryclient = useQueryClient();
    const members: IMember = queryclient.getQueryData(["members"]) || { data: [] };
    const currentMember: IUser | undefined = members?.data.find((member) => member?.id === Number(id));

    const allApps = queryclient.getQueryData(["apps"]);
    console.log(allApps);

    return (
        <>
            <Navbar />
            <div className="container bg-white rounded-lg pt-10 pb-40 w-1/2 items-start my-[3.125rem]">
                <h2 className="font-semibold mb-5">My Account</h2>
                <MemberForm email={currentMember?.email || ""} name={currentMember?.name || ""} />
                <ChangePassword />
                <Organization />
                <MemberAction />
            </div>
        </>
    );
};

export default MemberAccount;
