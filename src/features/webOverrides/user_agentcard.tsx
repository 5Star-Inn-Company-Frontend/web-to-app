import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { updateUserAgent } from "@/redux/app/websiteOverideSlice";

export const UserAgentConfigCard = () => {
    const dispatch = useDispatch();
    const userAgent = useAppSelector((state: RootState) => state.apps.websiteOveride.user_agent);

    const initialValue = userAgent || "enable";

    const [enableUserAgent, setEnableUserAgent] = useState(initialValue);

    useEffect(() => {
        setEnableUserAgent(initialValue);
    }, [initialValue]);

    const handleChangeUserAgent = (newvalue: string) => {
        setEnableUserAgent(newvalue);
        dispatch(updateUserAgent(newvalue));
    };

    return (
        <div className="rounded-md px-3 pt-4">
            <RadioGroup
                className="flex justify-between border border-primary20 p-[0.5rem] flex-grow rounded-md mb-4"
                value={enableUserAgent}
                onValueChange={handleChangeUserAgent}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r1" />
                    <Label className="text-xs" htmlFor="enable">
                        Enable
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disable" id="r2" />
                    <Label className="text-xs" htmlFor="disable">
                        Disable
                    </Label>
                </div>
            </RadioGroup>
            <Input
                className="w-full py-1 px-2 rounded-md border border-primary20"
                type="text"
                placeholder="5starcom"
            />
        </div>
    );
};
