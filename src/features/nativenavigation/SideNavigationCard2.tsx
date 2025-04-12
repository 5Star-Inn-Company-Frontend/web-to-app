import { ColorPicker } from "@/components/ColorPicker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateSideNavStylingAndroid } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CiLight } from "react-icons/ci";
import { FaAndroid } from "react-icons/fa6";

const radios = [
    { title: "disable", label: "Disable" },
    { title: "enable", label: "Enable" },
];

export const SideNavigationCard2 = () => {
    const dispatch = useAppDispatch();
    const sideNavStyleAndroid = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.styling.android
    );

    const showAppName = sideNavStyleAndroid.showAppName ? "enable" : "disable";
    const showLogo = sideNavStyleAndroid.showLogo ? "enable" : "disable";

    const handleEnableShowAppName = (value: string) => {
        const isShowAppNameEnabled = value === "enable";
        dispatch(
            updateSideNavStylingAndroid({
                ...sideNavStyleAndroid,
                showAppName: isShowAppNameEnabled,
            })
        );
    };

    const handleEnableShowLogo = (value: string) => {
        const showLogoEnabled = value === "enable";
        dispatch(
            updateSideNavStylingAndroid({
                ...sideNavStyleAndroid,
                showLogo: showLogoEnabled,
            })
        );
    };

    const handleChangeColorScheme = (key: keyof typeof sideNavStyleAndroid, value: string) => {
        updateSideNavStylingAndroid({ ...sideNavStyleAndroid, [key]: value });
    };

    return (
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-2 py-2 border-b border-primary20 rounded-t-md">
                <FaAndroid size="1.3rem" />
                Android
            </div>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="w-[45%]">
                        <Label className="text-xs font-normal mb-2 block">Show App Name</Label>
                        <RadioGroup
                            className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
                            value={showAppName}
                            onValueChange={(value) => handleEnableShowAppName(value)}
                        >
                            {radios.map((rad, index) => {
                                const { title, label } = rad;
                                return (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <RadioGroupItem value={title} id="r1" />
                                        <Label className="text-xs" htmlFor={label}>
                                            {label}
                                        </Label>
                                    </div>
                                );
                            })}
                        </RadioGroup>
                    </div>
                    <div className="w-[45%]">
                        <Label className="text-xs font-normal mb-2 block">Image</Label>
                        <RadioGroup
                            className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
                            value={showLogo}
                            onValueChange={(value) => handleEnableShowLogo(value)}
                        >
                            {radios.map((rad, index) => {
                                const { title, label } = rad;
                                return (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <RadioGroupItem value={title} id="r1" />
                                        <Label className="text-xs" htmlFor={label}>
                                            {label}
                                        </Label>
                                    </div>
                                );
                            })}
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
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR BACKGROUND
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.backgroundColor}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme(
                                                        "backgroundColor",
                                                        color
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR FOREGROUND
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.foregroundColor}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme(
                                                        "foregroundColor",
                                                        color
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR SEPERATOR
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.separatorColor}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme("separatorColor", color)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR HIGHLIGHT
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.highlightColor}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme("highlightColor", color)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-[0.625rem] text-primary40 block mb-2">
                                    PREVIEW
                                </span>
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
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR BACKGROUND
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.backgroundColorDark}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme(
                                                        "backgroundColorDark",
                                                        color
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR FOREGROUND
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.foregroundColorDark}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme(
                                                        "foregroundColorDark",
                                                        color
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-4">
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR SEPERATOR
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.separatorColorDark}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme("separatorColor", color)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span className="text-[0.625rem] text-primary40">
                                            SIDEBAR HIGHLIGHT
                                        </span>
                                        <div className="w-full flex border rounded-md px-2 py-1 items-center gap-2">
                                            <ColorPicker
                                                background={sideNavStyleAndroid.highlightColorDark}
                                                setBackground={(color: string) =>
                                                    handleChangeColorScheme(
                                                        "highlightColorDark",
                                                        color
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[0.625rem] text-primary40 block mb-2">
                                        PREVIEW
                                    </span>
                                    <img src="/dark-logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
