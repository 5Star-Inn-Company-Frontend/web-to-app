import { Text } from "@/components/global/text"
import { FaAndroid, FaApple } from "react-icons/fa6"
import { CiLight } from "react-icons/ci";
export const BottomTopBarStylingCard =({
    os
}:{
    os:"IOS"|"Android"
})=>{
    return(
        <div className="rounded-md border border-primary20 mb-10">
            <div className="flex gap-2 items-center border-b border-primary20 py-2 px-6 rounded-t-md">
                {
                    os ==="IOS"?(
                        <FaApple size="2rem"/>
                    ):(
                        <FaAndroid size="2rem"/>
                    )
                }
                {os}
            </div>
            <div className="px-6 py-4">
                <Text
                    style="text-md mb-4"
                    value="Background Color"
                />
                <div className="flex gap-4 items-center text-primary40 w-[60%]">
                    <div className="w-full">
                        <div className="flex gap-2 items-center text-xs mb-4">
                            <CiLight/>
                            Light mode
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                            <Text
                                style="text-[grey] text-xs"
                                value="#FFFFFF"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center text-primary40 text-xs mb-4">
                            <div className=" w-[0.8rem] h-[0.8rem] relative">
                                <img
                                    src="/darkscreen.svg"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            Dark mode
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
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
    )
}