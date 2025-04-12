import { Text } from "@/components/global/text";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaAndroid, FaApple } from "react-icons/fa6";
import TopNavColorScheme from "./topNavgationTab/TopNavColorScheme";

interface TopNavigationCardProps {
    os: "IOS" | "Android";
    radios: { title: string; label: string }[];
    value: string;
    onValueChange: (value: string) => void;
}

export const TopNavigationCard = ({ os, radios, value, onValueChange }: TopNavigationCardProps) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-2 py-2 border-b border-primary20 rounded-t-md">
                {os === "IOS" ? <FaApple size="1.3rem" /> : <FaAndroid size="1.3rem" />}
                {os}
            </div>
            <div className="px-4 py-4 border border-black">
                <Text style="text-xs mb-2" value="Default Display" />
                <RadioGroup
                    className="flex justify-between w-[30%] border border-primary20 p-[0.3rem] rounded-md"
                    value={value}
                    onValueChange={onValueChange}
                >
                    {radios.map((rad, index) => {
                        const { title, label } = rad;
                        return (
                            <div className="flex items-center space-x-2" key={index}>
                                <RadioGroupItem value={label} id="r1" />
                                <Label className="text-xs" htmlFor={label}>
                                    {title}
                                </Label>
                            </div>
                        );
                    })}
                </RadioGroup>
                <div className="border border-primary20 rounded-lg mt-4 px-5 pb-5">
                    <div className="grid xl:grid-cols-2 gap-x-8 mb-5">
                        <TopNavColorScheme mode="light" title="LIGHT MODE" os={os} />
                        <TopNavColorScheme mode="dark" title="DARK MODE" os={os} />
                    </div>

                    <div>
                        <Text style="text-xs mb-2" value="Default Display" />
                        <RadioGroup
                            className="flex justify-between w-[30%] border border-primary20 p-[0.3rem] rounded-md"
                            value={value}
                            onValueChange={onValueChange}
                        >
                            {radios.map((rad, index) => {
                                const { title, label } = rad;
                                return (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <RadioGroupItem value={label} id="r1" />
                                        <Label className="text-xs" htmlFor={label}>
                                            {title}
                                        </Label>
                                    </div>
                                );
                            })}
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};
