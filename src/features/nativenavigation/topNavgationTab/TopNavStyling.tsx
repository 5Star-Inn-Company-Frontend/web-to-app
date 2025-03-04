import { TopNavigationCard } from "../TopNavigationCard";
import TopNavigationCollapsable from "../TopNavigationCollapsable";

export default function TopNavStyling() {
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
                    radios={[
                        { title: "Text", label: "Text" },
                        { title: "Image", label: "Image" },
                    ]}
                />
                <TopNavigationCard
                    os="Android"
                    radios={[
                        { title: "Text", label: "Text" },
                        { title: "Image", label: "Image" },
                    ]}
                />
            </div>
        </TopNavigationCollapsable>
    );
}
