import { ColorPicker } from "@/components/ColorPicker";
import { updateSideNavStylingIos } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

interface ISideNavColorScheme {
    mode: string;
    img: string;
}

export default function SideNavColorScheme({ mode, img }: ISideNavColorScheme) {
    const dispatch = useAppDispatch();

    const sideNavStylingIos = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.styling.ios
    );

    const getInitialColorScheme = () => {
        if (mode === "light") {
            return {
                text_color: sideNavStylingIos.textColor,
                background_color: sideNavStylingIos.backgroundColor,
            };
        }

        return {
            text_color: sideNavStylingIos.textColorDark,
            background_color: sideNavStylingIos.backgroundColorDark,
        };
    };

    const handleChangeBgColor = (color: string) => {
        const updatedBgColor =
            mode === "light"
                ? { ...sideNavStylingIos, backgroundColor: color }
                : { ...sideNavStylingIos, backgroundColorDark: color };
        dispatch(updateSideNavStylingIos(updatedBgColor));
    };

    const handleChangeTextColor = (color: string) => {
        const updatedTextColor =
            mode === "light"
                ? { ...sideNavStylingIos, textColor: color }
                : { ...sideNavStylingIos, textColorDark: color };
        dispatch(updateSideNavStylingIos(updatedTextColor));
    };
    return (
        <div className="bg-deepgray rounded-md p-3 mt-4">
            <div className=" mb-3">
                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                    <div className=" w-[0.8rem] h-[0.8rem] flex items-center">
                        {mode.toUpperCase() === "LIGHT MODE" ? (
                            <CiLight className="text-2xl" />
                        ) : (
                            <MdDarkMode />
                        )}
                    </div>
                    {mode}
                </div>
                <div className="flex items-center gap-x-5 mb-4">
                    <div>
                        <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={getInitialColorScheme().text_color}
                                setBackground={(color: string) => handleChangeTextColor(color)}
                            />
                        </div>
                    </div>
                    <div>
                        <span className="text-[0.625rem] text-primary40">BACKGROUND COLOR</span>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <ColorPicker
                                background={getInitialColorScheme().background_color}
                                setBackground={(color: string) => handleChangeBgColor(color)}
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
