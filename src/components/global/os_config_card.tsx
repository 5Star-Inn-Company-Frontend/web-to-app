import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaAndroid, FaApple } from "react-icons/fa6";

interface IOsConfigCard {
    os: "IOS" | "Android" | "IOS and Android";
    children?: React.ReactNode;
    value?: string;
    onValueChange?: (newValue: string) => void;
    radios?: {
        title: string;
        label: string;
    }[];
}

export const OsConfigCard = ({ os, radios, value, onValueChange, children }: IOsConfigCard) => {
    return (
        <div className="border border-primary20 rounded-lg">
            <div className="flex gap-2 px-6 py-2 border-b border-primary20 items-center rounded-t-md text-sm">
                {os === "IOS" ? (
                    <FaApple size="1.3rem" />
                ) : os === "Android" ? (
                    <FaAndroid size="1.3rem" />
                ) : (
                    <div className="flex gap-4 items-center">
                        <FaApple size="1.3rem" />
                        <FaAndroid size="1.3rem" />
                    </div>
                )}
                {os}
            </div>
            <div className="pb-4">
                {radios && (
                    <RadioGroup
                        className="flex justify-between border border-primary20 mt-4 mx-4 p-[0.3rem] flex-grow rounded-md"
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
                )}
                {children && <div>{children}</div>}
            </div>
        </div>
    );
};
