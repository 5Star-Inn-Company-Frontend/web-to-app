import Accessibility from "@/features/interface/Accessibility";
import PitchToZoom from "@/features/interface/PitchToZoom";
import SwipeGestures from "@/features/interface/SwipeGestures";
import PullToRefresh from "@/features/interface/PullToRefresh";
import KeepScreenOn from "@/features/interface/KeepScreenOn";
import ScreenOrientation from "@/features/interface/ScreenOrientation";
import DarkMode from "@/features/interface/DarkMode";
import FullScreen from "@/features/interface/FullScreen";
import ScreenOn from "@/features/interface/ScreenOn";
import InterfaceHeading from "@/features/interface/InterfaceHeading";

export const Interface = () => {
    return (
        <>
            <InterfaceHeading />
            <ScreenOn />
            <FullScreen />
            <DarkMode />
            <ScreenOrientation />
            <KeepScreenOn />
            <PullToRefresh />
            <SwipeGestures />
            <PitchToZoom />
            <Accessibility />
        </>
    );
};
