
const Settings = () => {
    return (
        <div className="w-[65%] mx-auto">
            <div className="flex flex-col items-start mt-8 gap-y-7">
                <label htmlFor="name" className="text-primary60 font-medium leading-4">My Organizations</label>
                <input type="text" name="name" placeholder="Emmy`s Team" className="border w-full py-3 px-7 rounded-lg" />
                <button className="bg-lightpink text-red px-5 py-2 rounded-lg">Leave Organization</button>
            </div>

        </div>
    )
}

export default Settings