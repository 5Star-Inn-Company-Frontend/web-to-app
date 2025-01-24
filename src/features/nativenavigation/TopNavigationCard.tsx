import { Text } from "@/components/global/text"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CiLight } from "react-icons/ci"
import { FaAndroid, FaApple } from "react-icons/fa6"


interface TopNavigationCardProps {
    os: "IOS" | "Android"
    radios: { title: string; label: string }[]
}

export const TopNavigationCard = ({ os, radios }: TopNavigationCardProps) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-2 py-2 border-b border-primary20 rounded-t-md">
                {
                    os === "IOS" ? (
                        <FaApple size="1.3rem" />
                    ) : (
                        <FaAndroid size="1.3rem" />
                    )
                }
                {os}
            </div>
            <div className="px-4 py-4">
                <Text
                    style="text-xs mb-2"
                    value="Default Display"
                />
                <RadioGroup
                    className="flex justify-between w-[30%] border border-primary20 p-[0.3rem] rounded-md"
                    defaultValue="off">
                    {
                        radios.map((rad, index) => {
                            const {
                                title,
                                label
                            } = rad;
                            return (
                                <div
                                    className="flex items-center space-x-2"
                                    key={index}
                                >
                                    <RadioGroupItem value={label} id="r1" />
                                    <Label className="text-xs" htmlFor={label}>{title}</Label>
                                </div>
                            )
                        })
                    }
                </RadioGroup>
                <div className="border border-primary20 rounded-lg mt-4 px-5 pb-5">
                    <div className="grid grid-cols-2 gap-x-8 mb-5">
                        <div className="bg-deepgray rounded-md p-3 mt-4">
                            <div className=" mb-3">
                                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                                    <CiLight className="text-sm" />
                                    LIGHT MODE
                                </div>
                                <span className="text-[0.625rem] text-primary40">BACKGROUND COLOR</span>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">

                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>

                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">

                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#0E0D08"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-deepgray rounded-md p-3 mt-4">
                            <div className=" mb-3">
                                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                                    <div className=" w-[0.8rem] h-[0.8rem] relative">
                                        <img
                                            src="/darkscreen.svg"
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                    DARK MODE
                                </div>
                                <span className="text-[0.625rem] text-primary40">BACKGROUND COLOR</span>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">

                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <span className="text-[0.625rem] text-primary40">TEXT COLOR</span>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">

                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#0E0D08"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Text
                            style="text-xs mb-2"
                            value="Default Display"
                        />
                        <RadioGroup
                            className="flex justify-between w-[30%] border border-primary20 p-[0.3rem] rounded-md"
                            defaultValue="off">
                            {
                                radios.map((rad, index) => {
                                    const {
                                        title,
                                        label
                                    } = rad;
                                    return (
                                        <div
                                            className="flex items-center space-x-2"
                                            key={index}
                                        >
                                            <RadioGroupItem value={label} id="r1" />
                                            <Label className="text-xs" htmlFor={label}>{title}</Label>
                                        </div>
                                    )
                                })
                            }
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}