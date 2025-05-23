import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateTopNavigateDisplayMode } from "@/redux/app/NavigationSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";

export default function VisualEditorDisplayMode() {
    const dispatch = useAppDispatch();

    const [displayMode, setDisplayMode] = useState("page title");

    const handleChangeDisplayMode = (value: string) => {
        setDisplayMode(value);
        dispatch(updateTopNavigateDisplayMode(value));
    };

    return (
        <>
            <Label className="font-normal my-5 block">Display Mode</Label>
            <RadioGroup
                value={displayMode}
                onValueChange={handleChangeDisplayMode}
                className="flex justify-between items-center p-1 rounded-md border border-primary20"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="page title" id="r1" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r1">
                        Page Title
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom title" id="r2" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r2">
                        Custom Title
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="images" id="r3" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                        Images
                    </Label>
                </div>
            </RadioGroup>
        </>
    );
}
