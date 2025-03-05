import { useEffect, useState } from "react";
import { TopNavigationCard } from "../TopNavigationCard";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateNavigationTopBarTab } from "@/redux/app/appSlice";

type TInitialValue = "text" | "image";

export default function TopNavStyling() {
    const dispatch = useAppDispatch();
    const defaultDisplay = useAppSelector((state: RootState) => state.app.navigation.top_nav_bar.styling);

    const initialValue = defaultDisplay.default_display || "text";

    const [topNavDefaultDisplay, setTopNavDefaultDisplay] = useState<TInitialValue | string>(initialValue);

    useEffect(() => {
        setTopNavDefaultDisplay(initialValue);
    }, [initialValue]);

    const handleChangeDefaultDisplay = (value: TInitialValue | string) => {
        setTopNavDefaultDisplay(value);

        dispatch(updateNavigationTopBarTab({ styling: { ...defaultDisplay, default_display: value } }));
    };

    return (
        <TopNavigationCollapsable title="Styling">
            <p className="text-sm text-primary60 mb-6">
                Configure display settings for text in the top navigation bar and add an optional custom horizontal
                image. To show different content based on the page being shown in your app, configure Dynamic Titles.
                Note hat for iOS the color of any native UI elements such as the hamburger menu will follow the app-wide
                Theme colors set on the Branding tab.
            </p>
            <div className="grid gap-y-5">
                <TopNavigationCard
                    os="IOS"
                    value={topNavDefaultDisplay}
                    onValueChange={handleChangeDefaultDisplay}
                    radios={[
                        { title: "Text", label: "text" },
                        { title: "Image", label: "image" },
                    ]}
                />
                <TopNavigationCard
                    os="Android"
                    value={topNavDefaultDisplay}
                    onValueChange={handleChangeDefaultDisplay}
                    radios={[
                        { title: "Text", label: "text" },
                        { title: "Image", label: "image" },
                    ]}
                />
            </div>
        </TopNavigationCollapsable>
    );
}
