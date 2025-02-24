import { SwipeGestorsCardCard } from "@/components/customui/app/interface/swipegestors";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function SwipeGestures() {
    const dispatch = useAppDispatch();
    const swipeGesture = useSelector((state: RootState) => state.app.interface.swipe_gesture);

    const initialValue = useMemo(() => (swipeGesture ? "on" : "off"), [swipeGesture]);
    const [enableSwipeGestures, setEnableSwipeGestures] = useState(initialValue);

    const handleChangeEnableSwipeGestures = (newvalue: string) => {
        setEnableSwipeGestures(newvalue);
        const swipeGestureIsEnabled = newvalue === "on";
        dispatch(updateInterface({ swipe_gesture: swipeGestureIsEnabled }));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Swipe Gestures"
                subTitle="Add swipe gestures to your app to enable swiping to go back and forward in the navigation history. On Android, arrow indicators will show on the screen to indicate when there is a page available to go back to or to go forward to."
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex justify-between border border-primary20 p-[0.5rem] flex-grow rounded-md w-fit gap-8 mb-4"
                        value={enableSwipeGestures}
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
                    <SwipeGestorsCardCard os="Android" />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
