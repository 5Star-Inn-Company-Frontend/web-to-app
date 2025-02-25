import { KeepScreenOnCard } from "@/features/interface/keep_screen_config";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function KeepScreenOn() {
    const dispatch = useAppDispatch();
    const keepScreenOn = useSelector((state: RootState) => state.app.interface.screen_on);

    const initialValue = useMemo(() => (keepScreenOn ? "enable" : "disable"), [keepScreenOn]);
    const [enableKeepScreenOn, setEnableKeepScreenOn] = useState(initialValue);

    const handleChangeEnableKeepScreenOn = (newvalue: string) => {
        setEnableKeepScreenOn(newvalue);
        const keepScreenOnEnabled = newvalue === "enable";
        dispatch(updateInterface({ screen_on: keepScreenOnEnabled }));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Keep Screen On"
                subTitle="With native page transitions enabled a loading spinner will show when loading new pages within your app. The current page will fade out, the loading spinner will be displayed, and then the new page will fade in when it has finished loading."
            >
                <div className="px-8">
                    <RadioGroup
                        className="inline-flex text-xs border border-primary40 p-[0.4rem] rounded-md"
                        value={enableKeepScreenOn}
                        onValueChange={handleChangeEnableKeepScreenOn}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs" htmlFor="disable">
                                Disable
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs" htmlFor="enable">
                                Enable
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="flex flex-col gap-2 my-8">
                        <Label className="text-xs" htmlFor="overlay">
                            Alpha transparency level:0.5
                        </Label>
                        <Slider
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            className="lg:w-[30%] xl:w-[50%] md:w-30%] sm:w-full"
                            style={{ height: "1px" }}
                        />
                    </div>
                    <div className="grid gap-y-8">
                        <KeepScreenOnCard os="IOS" />
                        <KeepScreenOnCard os="Android" />
                    </div>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
