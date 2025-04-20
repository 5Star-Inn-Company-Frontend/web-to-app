import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Text } from "@/components/global/text";
import { FaAndroid, FaApple } from "react-icons/fa6";

interface IScreenOrientationConfigCard {
    os: "IOS" | "Android";
    value: string;
    onValueChange: (newvalue: string) => void;
    valueTab: string;
    onValueChangeTab: (newvalue: string) => void;
}

export const ScreenOrientationConfigCard = ({
    os,
    value,
    onValueChange,
    valueTab,
    onValueChangeTab,
}: IScreenOrientationConfigCard) => {
    return (
        <div className="p-4 rounded-md border border-primary20">
            <div className="flex gap-x-2 text-sm items-center border border-primary20 border-b p-4 rounded-t-md">
                {os === "IOS" ? <FaApple size="1.3rem" /> : <FaAndroid size="1.3rem" />}
                {os}
            </div>
            <div className="flex flex-col gap-4">
                <Text style="text-sm mt-2" value={os === "IOS" ? "Iphone" : "Phone"} />
                <RadioGroup
                    className="flex flex-col text-primary40 border border-primary20 p-[0.7rem] flex-grow rounded-md"
                    value={value}
                    onValueChange={onValueChange}
                >
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="auto" id="r1" />
                        <Label className="text-xs" htmlFor="auto">
                            Auto Rotate
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="portrait" id="r2" />
                        <Label className="text-xs" htmlFor="portrait">
                            Fixed Portrait
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="landscape" id="r2" />
                        <Label className="text-xs" htmlFor="Landscape">
                            Fixed Landscape
                        </Label>
                    </div>
                </RadioGroup>
                <Text style="text-sm mt-2" value={os === "IOS" ? "Ipad" : "Tablet"} />
                <RadioGroup
                    className="flex flex-col text-primary40 border border-primary20 p-[0.7rem] flex-grow rounded-md"
                    value={valueTab}
                    onValueChange={onValueChangeTab}
                >
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="auto" id="r1" />
                        <Label className="text-xs" htmlFor="auto">
                            Auto Rotate
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="portrait" id="r2" />
                        <Label className="text-xs" htmlFor="portrait">
                            Fixed Portrait
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                        <RadioGroupItem value="landscape" id="r2" />
                        <Label className="text-xs" htmlFor="Landscape">
                            Fixed Landscape
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};
