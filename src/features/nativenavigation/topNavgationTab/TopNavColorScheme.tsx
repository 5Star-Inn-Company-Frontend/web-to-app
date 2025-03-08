import { ColorPicker } from "@/components/ColorPicker";
import { updateTopNavDarkMode, updateTopNavLightMode } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IColorScheme } from "@/types/type";
import { useEffect, useMemo, useState } from "react";
import { CiLight } from "react-icons/ci";

interface ITopNavColorScheme {
    title: string;
    mode: string;
}
export default function TopNavColorScheme({ mode, title }: ITopNavColorScheme) {
    const dispatch = useAppDispatch();
    const topNavStylingStore = useAppSelector(
        (state: RootState) => state.apps.navigation.top_nav_bar.styling
    );

    const initialvalue = useMemo(
        () =>
            mode === "light_mode" ? topNavStylingStore.light_mode : topNavStylingStore.dark_mode,
        [topNavStylingStore, mode]
    );

    const [colorSchemeState, setColorSchemeState] = useState<IColorScheme>(initialvalue);

    useEffect(() => {
        setColorSchemeState(initialvalue);
    }, [initialvalue]);

    const handleChangeTextColor = (color: string) => {
        setColorSchemeState((prev) => ({ ...prev, text_color: color }));

        const newColorScheme = { ...colorSchemeState, text_color: color };

        if (mode === "light_mode") {
            dispatch(updateTopNavLightMode(newColorScheme));
        } else {
            dispatch(updateTopNavDarkMode(newColorScheme));
        }
    };

    const handleChangeBgColor = (color: string) => {
        setColorSchemeState((prev) => ({ ...prev, background_color: color }));

        const newColorScheme = { ...colorSchemeState, background_color: color };

        if (mode === "light_mode") {
            dispatch(updateTopNavLightMode(newColorScheme));
        } else {
            dispatch(updateTopNavDarkMode(newColorScheme));
        }
    };

    return (
        <div className="bg-deepgray rounded-md p-3 mt-4">
            <div className=" mb-3">
                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                    <CiLight className="text-sm" />
                    {title}
                </div>
                <span className="text-[0.625rem] text-primary40">BACKGROUND COLOR</span>
                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                    <ColorPicker
                        background={colorSchemeState.background_color}
                        setBackground={handleChangeBgColor}
                    />
                </div>
            </div>
            <div className="">
                <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                    <ColorPicker
                        background={colorSchemeState.text_color}
                        setBackground={handleChangeTextColor}
                    />
                </div>
            </div>
        </div>
    );
}
