import { ColorPicker } from "@/components/ColorPicker";
import { Text } from "@/components/global/text";
import { CiLight } from "react-icons/ci";

interface IBgColorStyling {
    title: string;
    light: string;
    dark: string;
    handleChangeDarkBackground: (value: string) => void;
    handleChangeLightBackground: (value: string) => void;
}

export default function BgColorStyling({
    title,
    light,
    dark,
    handleChangeDarkBackground,
    handleChangeLightBackground,
}: IBgColorStyling) {
    return (
        <div className="px-6 py-4">
            <Text style="text-md mb-4" value={title} />
            <div className="flex gap-4 items-center text-primary40 w-[60%]">
                <div className="w-full">
                    <div className="flex gap-2 items-center text-xs mb-4">
                        <CiLight />
                        Light mode
                    </div>
                    <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                        <ColorPicker background={light} setBackground={handleChangeLightBackground} />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 items-center text-primary40 text-xs mb-4">
                        <div className=" w-[0.8rem] h-[0.8rem] relative">
                            <img src="/darkscreen.svg" alt="object not found" className="w-full" />
                        </div>
                        Dark mode
                    </div>
                    <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                        <ColorPicker background={dark} setBackground={handleChangeDarkBackground} />
                    </div>
                </div>
            </div>
        </div>
    );
}
