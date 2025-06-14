import { ChangeEvent } from "react";
import { Label } from "./ui/label";

interface IInputImage {
    inputId: string;
    onInputChange: (file: File) => void;
}

export default function InputImage({ inputId, onInputChange }: IInputImage) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        onInputChange(file);
    };

    return (
        <div className="flex items-center mt-4">
            <Label
                htmlFor={inputId}
                className="cursor-pointer border border-primary60 p-2 rounded-lg"
            >
                Change Image
            </Label>
            <input
                onChange={handleInputChange}
                type="file"
                name="iconImg"
                className="hidden"
                id={inputId}
            />
        </div>
    );
}


