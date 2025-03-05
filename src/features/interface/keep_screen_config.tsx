import { Text } from "@/components/global/text"
import { CiLight } from "react-icons/ci"
import { FaAndroid, FaApple } from "react-icons/fa6"
export const KeepScreenOnCard =({
    os
}:{
    os:"IOS"|"Android"
})=>{
    return(
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-6 py-2 border-b border-primary20 rounded-t-md">
                {
                    os ==="IOS"?(
                        <FaApple size="1.3rem"/>
                    ):(
                        <FaAndroid size="1.3rem"/>
                    )
                }
                {os}
            </div>
            <div className="px-6 py-4">
                <Text
                    style="text-xs mb-5"
                    value="Loading Spinner Color"
                />
                <div className="flex justify-between items-center gap-4 w-[60%]">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <CiLight/>
                            LIGHT MODE
                        </div>
                        <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                            <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                            <Text
                                style="text-[grey] text-xs"
                                value="#FFFFFF"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                            <div className=" w-[0.8rem] h-[0.8rem] relative">
                                <img
                                    src="/darkscreen.svg"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            DARK MODE
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