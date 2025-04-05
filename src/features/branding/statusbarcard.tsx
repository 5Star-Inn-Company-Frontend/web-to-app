"use client";

import { ColorPicker } from "@/components/ColorPicker";
import { Text } from "@/components/global/text";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { updateStatusBar } from "@/redux/app/brandSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { RootState } from "@/redux/store";
// import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaAndroid, FaApple } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

interface IStatusBarCard {
    os: "IOS" | "Android";
}

export const StatusbarCard = ({ os }: IStatusBarCard) => {
    // const dispatch = useAppDispatch();
    // const appData = useAppSelector((state: RootState) => state.apps.branding.statusBar);

    // const [statusBar, setStatusBar] = useState(appData);

    // useEffect(() => {
    //     setStatusBar(appData);
    // }, [appData]);

    // const handleUpdateStatusBar = (status: string) => {
    //     setStatusBar(status);
    //     dispatch(updateStatusBar(status));
    // };

    return (
        <div className="rounded-md border border-primary20">
            <div className="flex gap-2 items-center border-b border-primary20 py-3 px-6 rounded-t-md">
                {os === "IOS" ? <FaApple size="2rem" /> : <FaAndroid size="2rem" />}
                {os} / Android
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col items-center justify-between gap-4 xl:px-6 py-2">
                <div className="flex w-full px-4 gap-2 flex-col items-start">
                    <div className="w-full xl:flex items-center gap-x-6 justify-between">
                        <div className="xl:w-[90%] mb-2">
                            <Text style="text-md mt-4 mb-3" value="Appearance" />
                            <div className="w-full text-primary40 flex justify-between items-center gap-4">
                                <RadioGroup
                                    className="flex justify-between border p-[0.7rem] rounded-md w-full"
                                    defaultValue="auto"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="auto" id="r1" />
                                        <Label htmlFor="r1">Auto</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="light" id="r2" />
                                        <Label htmlFor="r2">Light</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="dark" id="r3" />
                                        <Label htmlFor="r3">Dark</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="">
                            <Text style="text-md mt-2 mb-3" value="Effects" />
                            <div className="w-full text-primary40 flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between items-center gap-x-4">
                                <RadioGroup
                                    className="flex justify-between border p-[0.7rem] rounded-md w-full"
                                    // value={statusBar}
                                    // onValueChange={handleUpdateStatusBar}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="overlay" id="r1" />
                                        <Label htmlFor="r1">Overlay</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="blur" id="r2" />
                                        <Label htmlFor="r2">Blur</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[60%] pb-4">
                        <Text style="text-md mb-4" value="Background Color" />
                        <div className="flex items-center gap-x-8">
                            <div>
                                <div className="flex gap-2 justify-between items-center text-[grey] xl:text-xs mb-4">
                                    <CiLight />
                                    Light mode
                                </div>
                                <div className="flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <ColorPicker background="#FFFFFF" setBackground={() => {}} />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center text-[grey] xl:text-xs mb-4">
                                    <MdDarkMode />
                                    Dark mode
                                </div>
                                <div className="flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <ColorPicker background="#000000" setBackground={() => {}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
