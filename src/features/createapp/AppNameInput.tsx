import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
// import { ChangeEvent } from "react";

interface IAppNameInput {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export default function AppNameInput({ handleChange, value }: IAppNameInput) {
    return (
        <div className="mb-10">
            <h2 className="text-base font-medium mb-5">App Name</h2>
            <p className="text-primary60 mb-2">Our App Name is displayed on the device home screen.</p>
            <Input
                type="text"
                name="name"
                value={value}
                placeholder="App Name"
                className="border border-primary60 w-full rounded-sm px-5 py-2"
                onChange={handleChange}
                required
            />
        </div>
    );
}
