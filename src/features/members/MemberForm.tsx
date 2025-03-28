interface IMember {
    name: string;
    email: string;
}
const MemberForm = ({ name, email }: IMember) => {
    return (
        <div className="mb-8 flex items-center gap-x-8 justify-between w-full">
            <div className="flex flex-col w-full">
                <label htmlFor="fullname" className="mb-2">
                    Name
                </label>
                <input type="text" name="fullname" className="border rounded-md h-10 w-full px-3" value={name} />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="name" className="mb-2">
                    Email
                </label>
                <input type="text" name="email" className="border rounded-md h-10 w-full px-3" value={email} />
            </div>
        </div>
    );
};

export default MemberForm;
