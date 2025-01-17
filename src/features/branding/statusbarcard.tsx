import { Text } from "@/components/global/text"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { CiLight } from "react-icons/ci";
import { FaAndroid, FaApple } from "react-icons/fa6"
export const StatusbarCard = ({
    os
}: {
    os: "IOS" | "Android"
}) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex gap-2 items-center border-b border-primary20 py-3 px-6 rounded-t-md">
                {
                    os === "IOS" ? (
                        <FaApple size="2rem" />
                    ) : (
                        <FaAndroid size="2rem" />
                    )
                }
                {os}
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col items-center justify-between gap-4 px-6 py-2">
                <div className="flex gap-2 flex-col items-start flex-grow">
                    <div className="flex items-center gap-x-6 justify-between">
                        <div className="w-[90%] mb-2">
                            <Text
                                style="text-md mt-4 mb-3"
                                value="Appearance"
                            />
                            <div className="w-full text-primary40 flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between items-center gap-4">
                                <RadioGroup
                                    className="flex justify-between border p-[0.7rem] rounded-md w-full"
                                    defaultValue="auto">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="auto" id="r1" />
                                        <Label htmlFor="r1">Auto</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="light" id="r2" />
                                        <Label htmlFor="r2">Light</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="dark" id="r3" />
                                        <Label htmlFor="r3">Dark</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="w-[10%]">
                            <Text
                                style="text-md mt-4 mb-4"
                                value="Effects"
                            />
                            <div className="flex gap-4">
                                <div className="flex items-center space-x-2">
                                    <Label htmlFor="overlay">OVERLAY</Label>
                                    <Switch id="overlay" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Label htmlFor="blur">BLUR</Label>
                                    <Switch id="blur" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%] pb-4">
                        <Text
                            style="text-md mb-4"
                            value="Background Color"
                        />
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex gap-2 items-center text-[grey] text-xs mb-4">
                                    <CiLight />
                                    Light mode
                                </div>
                                <div className="flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center text-[grey] text-xs mb-4">
                                    <div className=" w-[0.8rem] h-[0.8rem] relative">
                                        <img
                                            src="/darkscreen.svg"
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                    Dark mode
                                </div>
                                <div className="flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>
                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#000000"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}