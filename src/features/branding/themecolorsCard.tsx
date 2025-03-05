"use client";

import { Text } from "@/components/global/text";
import { FaAndroid, FaApple } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { ColorPicker } from "@/components/ColorPicker";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/hook";
import { updateBranding } from "@/redux/app/appSlice";

export const ThemeColorsCard = ({ os }: { os: "IOS" | "Android" }) => {
    const dispatch = useAppDispatch();
    const themeColor = useSelector((state: RootState) => state.app.branding.theme_color);

    const initialValue = themeColor || "#FFFFFF";

    const [screenBackground, setScreenBackground] = useState(initialValue);

    const updateThemeColor = (color: string) => {
        setScreenBackground(color);
        dispatch(updateBranding({ theme_color: color }));
    };

    useEffect(() => {
        setScreenBackground(themeColor);
        //eslint-disable-next-line
    }, [themeColor]);

    return (
        <div className="rounded-md border border-primary20">
            <div className="flex gap-2 items-center border-b border-primary20 py-2 px-6 rounded-t-md">
                {os === "IOS" ? <FaApple size="2rem" /> : <FaAndroid size="2rem" />}
                {os}/Android
            </div>
            <div className="px-6 py-4">
                <Text style="text-md mb-4" value={os === "IOS" ? "Primary Color" : "Secondary Color"} />
                <div className="flex gap-4 items-center text-primary40 w-[60%]">
                    <div className="w-full">
                        <div className="flex gap-2 items-center text-xs mb-4">
                            <CiLight />
                            Light mode
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={screenBackground}
                                setBackground={(color) => updateThemeColor(color)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center text-primary40 text-xs mb-4">
                            <div className=" w-[0.8rem] h-[0.8rem] relative">
                                <img src="/darkscreen.svg" alt="object not found" className="w-full" />
                            </div>
                            Dark mode
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={screenBackground}
                                setBackground={(color) => updateThemeColor(color)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
