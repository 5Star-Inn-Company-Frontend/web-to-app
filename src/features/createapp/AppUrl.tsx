import { ChangeEvent } from "react";

interface IAppUrl {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function AppUrl({ handleChange, value }: IAppUrl) {
    return (
        <div className="mb-10">
            <h2 className="text-base font-medium mb-5">Website URL</h2>
            <p className="text-primary60 mb-2">The webpage to display when your app loads.</p>
            <input
                type="url"
                name="url"
                value={value}
                className="border border-primary60 w-full rounded-sm px-5 py-2"
                placeholder="https://"
                onChange={handleChange}
                required
            />
        </div>
    );
}
