import { FaAndroid, FaApple } from "react-icons/fa6";
import BgColorStyling from "./bottomNavigationTab/BgColorStyling";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { updateNavigation } from "@/redux/app/appSlice";

interface IBottomTopBar {
    os: "IOS" | "Android";
}
export const BottomTopBarStylingCard = ({ os }: IBottomTopBar) => {
    const dispatch = useAppDispatch();
    const bottomTab = useAppSelector((state: RootState) => state.app.navigation.bottom_tab_bar);

    const initialValue = useMemo(() => {
        return { light: bottomTab.styling.light_mode, dark: bottomTab.styling.dark_mode };
    }, [bottomTab]);

    const [dark, setDark] = useState(initialValue.dark);
    const [light, setLight] = useState(initialValue.light);

    useEffect(() => {
        setDark(initialValue.dark);
        setLight(initialValue.light);
    }, [initialValue]);

    const handleChangeLightBackground = useCallback(
        (value: string) => {
            setLight(value);
            const newBottomTab = { ...bottomTab, styling: { ...bottomTab.styling, light_mode: value } };
            dispatch(updateNavigation({ bottom_tab_bar: newBottomTab }));
        },
        [dispatch, bottomTab]
    );

    const handleChangeDarkBackground = useCallback(
        (value: string) => {
            setDark(value);
            const newBottomTab = { ...bottomTab, styling: { ...bottomTab.styling, dark_mode: value } };
            dispatch(updateNavigation({ bottom_tab_bar: newBottomTab }));
        },
        [dispatch, bottomTab]
    );
    return (
        <div className="rounded-md border border-primary20 mb-10">
            <div className="flex gap-2 items-center border-b border-primary20 py-2 px-6 rounded-t-md">
                {os === "IOS" ? <FaApple size="2rem" /> : <FaAndroid size="2rem" />}
                {os}
            </div>
            {/* <div className="px-6 py-4">
                <Text style="text-md mb-4" value="Background Color" />
                <div className="flex gap-4 items-center text-primary40 w-[60%]">
                    <div className="w-full">
                        <div className="flex gap-2 items-center text-xs mb-4">
                            <CiLight />
                            Light mode
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                            <Text style="text-[grey] text-xs" value="#FFFFFF" />
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
                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>
                            <Text style="text-[grey] text-xs" value="#000000" />
                        </div>
                    </div>
                </div>
            </div> */}
            <BgColorStyling
                title="Background Color"
                light={light}
                dark={dark}
                handleChangeDarkBackground={handleChangeDarkBackground}
                handleChangeLightBackground={handleChangeLightBackground}
            />
        </div>
    );
};
