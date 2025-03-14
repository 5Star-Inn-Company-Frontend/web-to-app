import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard2 } from "./OsConfigCard2";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateDarkMode } from "@/redux/app/interfaceSlice";

export default function DarkMode() {
    const dispatch = useAppDispatch();
    const darkMode = useSelector((state: RootState) => state.apps.interface.dark_mode);

    const initialvalue = useMemo(() => darkMode || "auto", [darkMode]);
    const [enableDarkMode, setEnableDarkMode] = useState(initialvalue);

    useEffect(() => {
        setEnableDarkMode(initialvalue);
    }, [initialvalue]);

    const handleChangeEnableDarkMode = (newvalue: string) => {
        setEnableDarkMode(newvalue);
        dispatch(updateDarkMode(newvalue));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Dark Mode"
                subTitle="Set the default Light/Dark mode for your app. The Auto mode follows the device setting for Light & Dark Mode, but you can set Light or Dark to force a mode irrespective of the device setting. The current mode can also be changed at runtime using the Median JavaScript Bridge."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard2
                        os="IOS"
                        value={enableDarkMode}
                        onValueChange={handleChangeEnableDarkMode}
                        radios={[]}
                    />
                    <OsConfigCard2
                        os="Android"
                        value={enableDarkMode}
                        onValueChange={handleChangeEnableDarkMode}
                        radios={[]}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
