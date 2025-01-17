import { Label } from "@/components/ui/label"
import { FaAndroid, FaApple } from "react-icons/fa6"

export const AppIconCard = ({
    os,
    img,
}: {
    os: "IOS" | "Android",
    img: string,
}) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex gap-x-2 items-center border-b border-primary20 p-4 rounded-t-md">
                {
                    os === "IOS" ? (
                        <FaApple size="2rem" />
                    ) : (
                        <FaAndroid size="2rem" />
                    )
                }
                {os}
            </div>
            <div className="flex items-center py-5 px-3">
                <div className="w-[80%] flex items-center justify-between">
                    <Label htmlFor="iconImg" className="cursor-pointer border border-primary60 p-4 rounded-lg">Change Images</Label>
                    <input type="file" name="iconImg" className="hidden" id="iconImg"/>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                    <img
                        src={img}
                        alt="object not found"
                        className="w-13 h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}