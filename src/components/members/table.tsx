// TableComponent.tsx

type User = {
  fullName: string;
  email: string;
  role: string;
  appAccess: string;
};

type TableProps = {
  users: User[];
};

const Table: React.FC<TableProps> = ({ users }) => {
  const getUserInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');
    return initials;
  };

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
            <>
            <tr key={index} className="bg-deepgray">
              <td className="px-4 py-4 text-xs flex items-center">
                <div className="w-8 h-8 bg-pinkred text-white rounded-full flex items-center justify-center mr-3">
                  {getUserInitials(user.fullName)}
                </div>
                {user.fullName}
              </td>
              <td className="px-4 py-4 text-xs">{user.email}</td>
              <td className="px-4 py-4 text-xs">{user.role}</td>
              <td className="px-4 py-4 text-xs">{user.appAccess}</td>
            </tr>
            <div className="h-2"></div>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
