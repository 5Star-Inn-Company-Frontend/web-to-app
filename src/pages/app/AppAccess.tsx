import Dropdown from "@/components/Dropdown"
import Initials from "@/utils/initials"
import { useState } from "react"

const AppAccess = () => {
    const [selected, setSelected] = useState("")

    const handleSelect = (option: string) => {
        setSelected(option)
    }

    const options = ["Admin", "Editor", "Viewer"]
    return (
        <>
            <div className="px-6 py-7">
                <h1 className="font-bold text-2xl">App Access Management</h1>
            </div>
            <div className="px-6 py-7 border-t border-b border-primary5">
                <h2 className="mb-8 font-medium text-lg">Add existing member to app</h2>
                <div className="flex justify-between border border-primary5 py-1 px-2 rounded-lg">
                    <input type="text" className="w-full block px-2" placeholder="name@example.com" />
                    <Dropdown options={options} selected={selected} onSelect={handleSelect} label="Admin" />
                </div>
            </div>
            <div className="px-6 py-10">
                <h2 className="font-medium text-lg mb-8">Organization members with access to this app</h2>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-x-1">
                        <Initials name="Emmy" />
                        <p>Emmy</p>
                    </div>
                    <Dropdown options={options} selected={selected} onSelect={handleSelect} label="Admin"/>
                </div>
            </div>
        </>
    )
}

export default AppAccess
