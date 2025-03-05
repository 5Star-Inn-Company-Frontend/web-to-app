import { ColorPicker } from "@/components/ColorPicker";
import { updateNavigationSideBarTab } from "@/redux/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IColorScheme, ISidbarNavStyling } from "@/types/type";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

interface ISideNavColorScheme {
    mode: string;
    img: string;
}

export default function SideNavColorScheme({ mode, img }: ISideNavColorScheme) {
    const dispatch = useAppDispatch();
    const stylingColorScheme = useAppSelector((state: RootState) => state.app.navigation.sidebar_navigation.styling);
    const current_mode = mode === "LIGHT MODE" ? "light_mode" : "dark_mode";

    const initialValue = useMemo(
        () => (current_mode === "light_mode" ? stylingColorScheme.light_mode : stylingColorScheme.dark_mode) || "",
        [stylingColorScheme, current_mode]
    );

    const [colorScheme, setColorScheme] = useState<IColorScheme>(initialValue);

    useEffect(() => {
        setColorScheme(initialValue);
    }, [initialValue]);

    useCallback(() => {}, []);

    const handleChangeTextColorScheme = useCallback(
        (color: string) => {
            setColorScheme((prev) => ({ ...prev, text_color: color }));

            const newColorScheme: ISidbarNavStyling = {
                ...stylingColorScheme,
                [current_mode]: { ...colorScheme, text_color: color },
            };
            dispatch(updateNavigationSideBarTab({ styling: newColorScheme }));
        },
        [colorScheme, current_mode, dispatch, stylingColorScheme]
    );
    const handleChangeBgColorScheme = useCallback(
        (color: string) => {
            setColorScheme((prev) => ({ ...prev, background_color: color }));

            const newColorScheme: ISidbarNavStyling = {
                ...stylingColorScheme,
                [current_mode]: { ...colorScheme, background_color: color },
            };
            dispatch(updateNavigationSideBarTab({ styling: newColorScheme }));
        },
        [colorScheme, current_mode, dispatch, stylingColorScheme]
    );

    return (
        <div className="bg-deepgray rounded-md p-3 mt-4">
            <div className=" mb-3">
                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                    <div className=" w-[0.8rem] h-[0.8rem] flex items-center">
                        {mode.toUpperCase() === "LIGHT MODE" ? <CiLight className="text-2xl" /> : <MdDarkMode />}
                    </div>
                    {mode}
                </div>
                <div className="flex items-center gap-x-5 mb-4">
                    <div>
                        <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={colorScheme.text_color}
                                setBackground={handleChangeTextColorScheme}
                            />
                        </div>
                    </div>
                    <div>
                        <span className="text-[0.625rem] text-primary40">BACKGROUND COLOR</span>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={colorScheme.background_color}
                                setBackground={handleChangeBgColorScheme}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-[0.625rem] text-primary40 block mb-2">TEXT COLOR</span>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}
