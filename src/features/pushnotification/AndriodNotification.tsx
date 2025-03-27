import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAndroid } from "react-icons/fa6";

export default function AndriodNotification() {
    return (
        <CollapseableWithArrow title="Andriod Notification Icon">
            <p className="text-sm text-primary60 mb-4">
                Android notification icons are built into your app and must be a monochromatic image
                with transparent background.
            </p>

            <div className="border border-primary60 rounded-lg xl:w-[60%]">
                <div className="flex items-center gap-x-2 px-5 py-3 border-b border-primary60">
                    <FaAndroid />
                    <span>Andriod</span>
                </div>
                <div className="px-5 py-4 flex  items-center justify-between ">
                    <Label htmlFor="picture" className="border cursor-pointer py-2 px-5 rounded-md">
                        Change Image
                    </Label>
                    <Input id="picture" type="file" className="hidden" />
                    <div className="bg-primary80 w-20 h-20 flex items-center justify-center">
                        <FaAndroid className="text-white text-5xl" />
                    </div>
                </div>
            </div>
        </CollapseableWithArrow>
    );
}
