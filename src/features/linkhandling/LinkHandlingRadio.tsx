"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateNewWindow } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function LinkHandlingRadio() {
    const dispatch = useAppDispatch();
    const newWindow = useAppSelector(
        (state: RootState) => state.apps.linkHandling.internalVsExternalLinks.active
    );

    const enableNewWindow = newWindow ? "permitted" : "blocked";

    const handleUpdateLinkHandling = (status: string) => {
        const newWindowIsEnabled = status === "permitted";
        dispatch(updateNewWindow(newWindowIsEnabled));
    };

    return (
        <div className="px-8">
            <RadioGroup
                className="flex justify-between border p-[0.7rem] rounded-md w-fit gap-8"
                value={enableNewWindow}
                onValueChange={handleUpdateLinkHandling}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="permitted" id="r1" />
                    <Label htmlFor="r1">Permitted</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blocked" id="r2" />
                    <Label htmlFor="r2">Blocked</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
