import { FaApple } from "react-icons/fa6";
import BgColorStyling from "./bottomNavigationTab/BgColorStyling";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export const BottomTopBarStylingCard = () => {
    const bottomTab = useAppSelector(
        (state: RootState) => state.apps.navigation.bottomTabBar.styling
    );

    const bottomTabIos = bottomTab.ios;

    return (
        <div className="rounded-md border border-primary20 mb-10">
            <div className="flex gap-2 items-center border-b border-primary20 py-2 px-6 rounded-t-md">
                <FaApple size="2rem" />
                IOS
            </div>

            <BgColorStyling
                title="Background Color"
                light={bottomTabIos.tintColor}
                dark={bottomTabIos.tintColorDark}
                handleChangeDarkBackground={() => {}}
                handleChangeLightBackground={() => {}}
            />
        </div>
    );
};
