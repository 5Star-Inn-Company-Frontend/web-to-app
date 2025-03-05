// TableComponent.tsx

import { IUser } from "@/types/type";
import Initials from "@/utils/initials";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type TableProps = {
    users: IUser[];
};

const Table: React.FC<TableProps> = ({ users }) => {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">User</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">Email</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">Role</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">App Access</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Fragment key={index}>
                            <tr className="bg-deepgray mb-2">
                                <td className="px-4 py-4 text-xs flex items-center">
                                    <Initials name={user.name} />
                                    {user.name}
                                </td>
                                <td className="px-4 py-4 text-xs mb-2">{user.email}</td>
                                <td className="px-4 py-4 text-xs">{user.role.name}</td>
                                <td className="px-4 py-4 text-xs flex justify-between items-center">
                                    All
                                    <button onClick={() => navigate(`/members/account/${user.id}`)}>
                                        <img src="/chevron-right.svg" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="h-2"></tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
