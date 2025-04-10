import { SwipeGestorsCardCard } from "@/features/interface/swipegestors";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { updateSwipeGesture, updateSwipeGestureAndroid } from "@/redux/app/interfaceSlice";

export default function SwipeGestures() {
    const dispatch = useAppDispatch();
    const swipeGesture = useSelector((state: RootState) => state.apps.interface.swipeGestures);

    const enableSwipeGesture = swipeGesture.value ? "on" : "off";

    const swipeGestureAndroid = swipeGesture.android;

    const handleChangeEnableSwipeGestures = (newvalue: string) => {
        const swipeGestureIsEnabled = newvalue === "on";
        dispatch(updateSwipeGesture(swipeGestureIsEnabled));
    };

    const updateSwipeGestureColor = (key: keyof typeof swipeGestureAndroid, value: string) => {
        dispatch(updateSwipeGestureAndroid({ ...swipeGestureAndroid, [key]: value }));
    };

    return (
        <div className="pt-2 pb-5 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Swipe Gestures"
                subTitle="Add swipe gestures to your app to enable swiping to go back and forward in the navigation history. On Android, arrow indicators will show on the screen to indicate when there is a page available to go back to or to go forward to."
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex justify-between border border-primary20 p-[0.5rem] flex-grow rounded-md w-fit gap-8 mb-4"
                        value={enableSwipeGesture}
                        onValueChange={handleChangeEnableSwipeGestures}
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
                    <SwipeGestorsCardCard
                        os="Android"
                        bgLight={swipeGestureAndroid.backgroundColor}
                        setBgLight={(color: string) =>
                            updateSwipeGestureColor("backgroundColor", color)
                        }
                        bgDark={swipeGestureAndroid.backgroundColorDark}
                        setBgDark={(color: string) =>
                            updateSwipeGestureColor("backgroundColorDark", color)
                        }
                        activeColor={swipeGestureAndroid.activeColor}
                        setActiveColor={(color: string) =>
                            updateSwipeGestureColor("activeColor", color)
                        }
                        activeColorDark={swipeGestureAndroid.activeColorDark}
                        setActiveColorDark={(color: string) =>
                            updateSwipeGestureColor("activeColorDark", color)
                        }
                        inActiveColor={swipeGestureAndroid.inactiveColor}
                        setInActiveColor={(color: string) =>
                            updateSwipeGestureColor("inactiveColor", color)
                        }
                        inActiveColorDark={swipeGestureAndroid.inactiveColorDark}
                        setInActiveColorDark={(color: string) =>
                            updateSwipeGestureColor("inactiveColorDark", color)
                        }
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
