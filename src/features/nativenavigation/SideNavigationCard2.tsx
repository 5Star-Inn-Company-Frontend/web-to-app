import { Text } from "@/components/global/text"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CiLight } from "react-icons/ci"
import { FaAndroid, FaApple } from "react-icons/fa6"


interface SideNavigationCard2Props {
    os: "IOS" | "Android"
    radios: { title: string; label: string }[]
}

export const SideNavigationCard2 = ({ os, radios, }: SideNavigationCard2Props) => {
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
                <div className="flex items-center justify-between">

                    <div className="w-[45%]">
                        <Label className="text-xs font-normal mb-2 block">Show App Name</Label>
                        <RadioGroup
                            className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
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
                    <div className="w-[45%]">
                        <Label className="text-xs font-normal mb-2 block">Image</Label>
                        <RadioGroup
                            className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
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


                <div className="border border-primary20 rounded-lg mt-4 px-4 pb-5">
                    <div className="grid grid-cols-2 gap-x-3 mb-5">
                        <div className="bg-deepgray rounded-md p-2 mt-4">
                            <div className="mb-3">
                                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                                    <CiLight className="text-sm" />
                                    LIGHT MODE
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR BACKGROUND</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#FFFFFF"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR FOREGROUND</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#0E0D08"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR SEPERATOR</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#FFFFFF"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR HIGHLIGHT</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

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
                                    <span className="text-[0.625rem] text-primary40 block mb-2">PREVIEW</span>
                                    <img src="/light-logo.png" alt="" />
                                </div>
                        </div>
                        <div className="bg-deepgray rounded-md p-3 mt-4">
                            <div className="mb-3">
                                <div className="flex gap-2 items-center text-[grey] text-[0.625rem] mb-2">
                                    <div className="w-[0.8rem] h-[0.8rem] relative">
                                        <img
                                            src="/darkscreen.svg"
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                    DARK MODE
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR BACKGROUND</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#FFFFFF"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR FOREGROUND</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#0E0D08"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR SEPERATOR</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#FFFFFF"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">SIDEBAR HIGHLIGHT</span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">

                                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>

                                            <Text
                                                style="text-[grey] text-xs"
                                                value="#0E0D08"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[0.625rem] text-primary40 block mb-2">PREVIEW</span>
                                    <img src="/dark-logo.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}