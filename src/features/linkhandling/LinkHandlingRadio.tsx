"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateNewWindow } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LinkHandlingRadio() {
    const dispatch = useAppDispatch();
    const enableNewWindow = useSelector((state: RootState) => state.apps.linkHandling.new_window);

    const [newWindow, setNewWindow] = useState(enableNewWindow);

    useEffect(() => {
        setNewWindow(enableNewWindow);
    }, [enableNewWindow]);

    const handleUpdateLinkHandling = (status: string) => {
        setNewWindow(status);
        dispatch(updateNewWindow(status));
    };

    return (
        <div className="px-8">
            <RadioGroup
                className="flex justify-between border p-[0.7rem] rounded-md w-fit gap-8"
                value={newWindow}
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
