import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateViewPortWidth } from "@/redux/app/interfaceSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function ViewPort() {
    const dispatch = useAppDispatch();
    const viewPortWidth = useSelector((state: RootState) => state.apps.interface.view_port_width);

    const initialViewPortStatus = useMemo(
        () => (viewPortWidth ? "enable" : "disable"),
        [viewPortWidth]
    );
    const [enableViewPort, setEnableViewPort] = useState(initialViewPortStatus);

    useEffect(() => {
        setEnableViewPort(initialViewPortStatus);
    }, [initialViewPortStatus]);

    const handleEnableViewPoint = (status: string) => {
        setEnableViewPort(status);
        const isEnable = status === "enable";
        dispatch(updateViewPortWidth(isEnable));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="View port width"
                subTitle={`The app's viewport is the visible area of the window where content is visible. To adjust the scale of pages shown within your app, you can force a page width. Before modifying this setting, we first suggest altering the viewport meta tag on your website.`}
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex justify-between border p-[0.5rem] flex-grow rounded-md w-fit gap-8"
                        value={enableViewPort}
                        onValueChange={handleEnableViewPoint}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label htmlFor="disable">Disable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label htmlFor="enable">Enable</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
