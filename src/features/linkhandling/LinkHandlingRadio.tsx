"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateAppData } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LinkHandlingRadio() {
    const [newWindow, setNewWindow] = useState("permitted");

    const appData = useSelector((state: RootState) => state.app);
    const dispatch = useAppDispatch();

    const updateLinkHandling = (status: string) => {
        setNewWindow(status);

        console.log(status);
        const newData = { ...appData, link_handling: { ...appData.link_handling, new_window: status } };
        dispatch(updateAppData(newData));
    };

    useEffect(() => {
        setNewWindow(appData.link_handling?.new_window || "permitted");
        //eslint-disable-next-line
    }, []);

    return (
        <div className="px-8">
            <RadioGroup
                className="flex justify-between border p-[0.7rem] rounded-md w-fit gap-8"
                value={newWindow}
                onValueChange={updateLinkHandling}
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
