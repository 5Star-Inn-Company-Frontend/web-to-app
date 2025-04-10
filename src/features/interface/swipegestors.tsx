import { ColorPicker } from "@/components/ColorPicker";
import { Text } from "@/components/global/text";
import { CiLight } from "react-icons/ci";
import { FaAndroid, FaApple } from "react-icons/fa6";

interface ISwipeGestorsCard {
    os: "IOS" | "Android";
    bgLight: string;
    setBgLight: (color: string) => void;
    bgDark: string;
    setBgDark: (color: string) => void;
    activeColor: string;
    setActiveColor: (color: string) => void;
    activeColorDark: string;
    setActiveColorDark: (color: string) => void;
    inActiveColor: string;
    setInActiveColor: (color: string) => void;
    inActiveColorDark: string;
    setInActiveColorDark: (color: string) => void;
}

export const SwipeGestorsCardCard = ({
    os,
    bgLight,
    setBgLight,
    bgDark,
    setBgDark,
    activeColor,
    setActiveColor,
    activeColorDark,
    setActiveColorDark,
    inActiveColor,
    setInActiveColor,
    inActiveColorDark,
    setInActiveColorDark,
}: ISwipeGestorsCard) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex gap-2 text-sm items-center border-b border-primary20 py-4 px-6 rounded-t-md">
                {os === "IOS" ? <FaApple size="1.3rem" /> : <FaAndroid size="1.3rem" />}
                {os}
            </div>
            <div className="px-6">
                <Text style="text-sm mt-4" value="Navigation Background Color" />
                <div className="flex justify-between gap-4 items-center mt-4 w-[70%]">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <CiLight />
                            Light mode
                        </div>
                        <div className="w-fit flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker background={bgLight} setBackground={setBgLight} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <div className=" w-[0.6rem] h-[0.6rem] relative">
                                <img
                                    src="/darkscreen.svg"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            Dark mode
                        </div>
                        <div className="w-fit flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker background={bgDark} setBackground={setBgDark} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6">
                <Text style="text-sm mt-4" value="Navigation Active Color" />
                <div className="flex justify-between gap-4 items-center mt-4 w-[70%]">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <CiLight />
                            Light mode
                        </div>
                        <div className="w-fit flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker background={activeColor} setBackground={setActiveColor} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <div className=" w-[0.6rem] h-[0.6rem] relative">
                                <img
                                    src="/darkscreen.svg"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            Dark mode
                        </div>
                        <div className="w-fit flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker
                                background={activeColorDark}
                                setBackground={setActiveColorDark}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 pb-6">
                <Text style="text-sm mt-4" value="Navigation Inactive Color" />
                <div className="flex justify-between gap-4 items-center mt-4 w-[70%]">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <CiLight />
                            Light mode
                        </div>
                        <div className="flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker
                                background={inActiveColor}
                                setBackground={setInActiveColor}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <div className=" w-[0.6rem] h-[0.6rem] relative">
                                <img
                                    src="/darkscreen.svg"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            Dark mode
                        </div>
                        <div className="flex justify-between border border-primary40 rounded-md px-2 pr-10 py-1 items-center gap-2">
                            <ColorPicker
                                background={inActiveColorDark}
                                setBackground={setInActiveColorDark}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
