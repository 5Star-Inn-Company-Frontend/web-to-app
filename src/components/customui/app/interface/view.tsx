import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Localization from "@/features/interface/Localization";
import ViewPort from "@/features/interface/ViewPort";
import MaximumWindows from "@/features/interface/MaximumWindows";
import FrontScalling from "@/features/interface/FrontScalling";
import Accessibility from "@/features/interface/Accessibility";
import PitchToZoom from "@/features/interface/PitchToZoom";
import SwipeGestures from "@/features/interface/SwipeGestures";
import PullToRefresh from "@/features/interface/PullToRefresh";
import KeepScreenOn from "@/features/interface/KeepScreenOn";
import ScreenOrientation from "@/features/interface/ScreenOrientation";
import DarkMode from "@/features/interface/DarkMode";
import FullScreen from "@/features/interface/FullScreen";

export const InterfaceSection = () => {
    return (
        <>
            <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
                <Text style="text-4xl font-medium mb-4" value="App Interface" />
                <Text
                    style="text-sm text-[grey]"
                    value="App Interface settings control the functionality of your app, allowing you to optimize the app versus website experience for your users."
                />
            </div>
            <div className="p-4 pb-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="Kepp Screen On"
                    subTitle="Keep the device screen on all the time for many purposes such as a in-vehicle display app, museum kiosk app, trade show demo, etc. In addition to an app configuration which will be enabled at all times this setting can also be set and cleared via the JavaScript Bridge."
                >
                    <div className="px-8">
                        <RadioGroup
                            className="flex w-fit gap-8 justify-between border p-[0.7rem]  rounded-md"
                            defaultValue="off"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="off" id="r1" />
                                <Label htmlFor="off">Off</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="on" id="r2" />
                                <Label htmlFor="on">On</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CollapsibleComponent>
            </div>
            <FullScreen />
            <DarkMode />
            <ScreenOrientation />
            <KeepScreenOn />
            <PullToRefresh />
            <SwipeGestures />
            <PitchToZoom />
            <Accessibility />
            <FrontScalling />
            <MaximumWindows />
            <ViewPort />
            <Localization />
        </>
    );
};
