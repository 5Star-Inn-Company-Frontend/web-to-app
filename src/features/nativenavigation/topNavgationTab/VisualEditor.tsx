import { Input } from "@/components/ui/input";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoAdd, IoChevronForward, IoCopyOutline, IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function VisualEditor() {
    return (
        <TopNavigationCollapsable title="Top Navigate Bar Visual Editor">
            <div className="border border-primary20 p-3 rounded-lg">
                <div className="border border-primary20 p-2 rounded-lg">
                    <div className="flex items-center gap-x-5 bg-deepgray p-2 rounded-md">
                        <Input
                            className="p-1 bg-deepgray border-primary40"
                            placeholder="Top Nav Bar Menu 1 - All Pages"
                        />
                        <div className="flex items-center gap-x-2">
                            <IoIosCheckmarkCircle />
                            <IoCopyOutline />
                            <RiDeleteBin6Line />
                        </div>
                    </div>
                </div>
                <>
                    <Label className="font-normal my-5 block">Pages to Display Top Nav Bar</Label>
                    <RadioGroup
                        defaultValue="comfortable"
                        className="flex justify-between items-center p-1 rounded-md border border-primary20"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r1">
                                Single Page
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r2">
                                Multiple Pages
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                                All Pages
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                                Custom
                            </Label>
                        </div>
                    </RadioGroup>
                </>
                <div className="flex items-center justify-end mt-8">
                    <p className="text-xs">TEST RULE</p>
                    <IoChevronForward />
                </div>
                <>
                    <Label className="font-normal my-5 block">Display Mode</Label>
                    <RadioGroup
                        defaultValue="comfortable"
                        className="flex justify-between items-center p-1 rounded-md border border-primary20"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r1">
                                Page Title
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r2">
                                Custom Title
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                                Images
                            </Label>
                        </div>
                    </RadioGroup>
                </>
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center gap-x-4">
                        <IoEyeSharp />
                        <div className="bg-deepgray px-14 py-3">
                            <p className="text-xs">Page Title</p>
                        </div>
                        <IoAdd />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-x-6 justify-center my-10">
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <RiDeleteBin6Line />
                    <span className="text-xs">Clear All</span>
                </div>
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <IoAdd />
                    <span className="text-xs">Add Top Nav Bar</span>
                </div>
            </div>
        </TopNavigationCollapsable>
    );
}
