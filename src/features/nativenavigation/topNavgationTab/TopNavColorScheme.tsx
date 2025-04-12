import { ColorPicker } from "@/components/ColorPicker";
import { updateTopNavStylingAndroid, updateTopNavStylingIos } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

import { CiLight } from "react-icons/ci";

interface ITopNavColorScheme {
    title: string;
    mode: string;
    os: "IOS" | "Android";
}
export default function TopNavColorScheme({ mode, title, os }: ITopNavColorScheme) {
    const dispatch = useAppDispatch();

    const topNavStylingStore = useAppSelector(
        (state: RootState) => state.apps.navigation.topNavigationBar.styling
    );

    const getInitialColorScheme = () => {
        if (os === "IOS") {
            const osStyle = topNavStylingStore.ios;

            return {
                text_color: mode === "light" ? osStyle.textColor : osStyle.textColorDark,
                background_color: mode === "light" ? osStyle.tintColor : osStyle.tintColorDark,
            };
        }

        const osStyle = topNavStylingStore.android;

        return {
            text_color: mode === "light" ? osStyle.textColor : osStyle.textColorDark,
            background_color:
                mode === "light" ? osStyle.backgroundColor : osStyle.backgroundColorDark,
        };
    };

    const handleChangeBgColor = (color: string) => {
        if (os === "IOS") {
            mode === "light"
                ? dispatch(updateTopNavStylingIos({ ...topNavStylingStore.ios, tintColor: color }))
                : dispatch(
                      updateTopNavStylingIos({ ...topNavStylingStore.ios, tintColorDark: color })
                  );
            return;
        }
        mode === "light"
            ? dispatch(
                  updateTopNavStylingAndroid({
                      ...topNavStylingStore.android,
                      backgroundColor: color,
                  })
              )
            : dispatch(
                  updateTopNavStylingAndroid({
                      ...topNavStylingStore.android,
                      backgroundColorDark: color,
                  })
              );
    };

    const handleChangeTextColor = (color: string) => {
        if (os === "IOS") {
            mode === "light"
                ? dispatch(updateTopNavStylingIos({ ...topNavStylingStore.ios, textColor: color }))
                : dispatch(
                      updateTopNavStylingIos({ ...topNavStylingStore.ios, textColorDark: color })
                  );
            return;
        }
        mode === "light"
            ? dispatch(
                  updateTopNavStylingAndroid({
                      ...topNavStylingStore.android,
                      textColor: color,
                  })
              )
            : dispatch(
                  updateTopNavStylingAndroid({
                      ...topNavStylingStore.android,
                      textColorDark: color,
                  })
              );
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
                        background={getInitialColorScheme().background_color}
                        setBackground={(color: string) => handleChangeBgColor(color)}
                    />
                </div>
            </div>
            <div className="">
                <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                    <ColorPicker
                        background={getInitialColorScheme().text_color}
                        setBackground={(color: string) => handleChangeTextColor(color)}
                    />
                </div>
            </div>
        </div>
    );
}
