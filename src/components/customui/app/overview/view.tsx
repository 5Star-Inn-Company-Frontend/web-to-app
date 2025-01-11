import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { SelectInput } from "@/components/global/selectInput"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AiOutlineCopy, AiOutlineUsergroupAdd } from "react-icons/ai"
import { SelectItem } from "@/components/ui/select"

export const OverviewSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="px-6 py-10 bg-white w-full rounded">
                <Text
                    style="text-3xl font-semibold"
                    value="App Overview"
                />
            </div>
            <div className="px-6 bg-white border-t border-primary20 py-10">
                <CollapsibleComponent
                    title="Website Url"
                    subTitle="The website to display when you loads"
                >
                    <Input
                        type="text"
                        className="border p-2 w-full"
                    />
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white border-t border-primary20 py-10">
                <CollapsibleComponent
                    title="App Name"
                    subTitle="Your name is displayed on the device homescreen"
                >
                    <Input
                        type="text"
                        className="border p-2 w-full"
                    />
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App Description"
                    subTitle="A short description of your app for reference purpose. Only used internally and not not seen by end users."
                >
                    <textarea
                        className="border p-2 w-full"
                    ></textarea>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Private Management Link"
                >
                    <div className="flex items-center gap-4">
                        <Text
                            style="text-sm"
                            value="https://median.co/app/jc7kxvk467jyrx7z4ruv0m2d98"
                        />
                        <AiOutlineCopy/>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Public Sharing"
                >
                    <div className="flex items-center gap-4">
                        <Text
                            style="text-sm"
                            value="https://median.co/app/jc7kxvk467jyrx7z4ruv0m2d98"
                        />
                        <AiOutlineCopy/>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Organization members with access to this app"
                >
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="flex gap-2 items-center">
                                <div className=" w-[2rem] h-[2rem] relative">
                                    <img
                                        src="/laundry img.svg"
                                        alt="object not found"
                                        className="w-full"
                                    />
                                </div>
                                <Text
                                    value="Kemmy"
                                    style="text-sm text-start"
                                />
                            </div>
                            <SelectInput
                                    label="100%"
                                    placeholder="100%"
                                    style="4rem border"
                                >
                                {
                                    [{
                                        title:"200%",
                                        value:"200%"
                                    }].map((selectvalue,index)=>{
                                        const{
                                            title,
                                            value
                                        }=selectvalue;
                                        return(
                                            <SelectItem 
                                                value={value}
                                                key={index}
                                            >{title}
                                            </SelectItem>
                                        )
                                    })
                                }
                            </SelectInput>
                        </div>
                        <div className="w-fit mt-2">
                            <Button className="flex items-center gap-4 text-sm cursor-pointer justify-between">
                                <AiOutlineUsergroupAdd size="1.3rem" color="grey"/>
                                Manage access
                            </Button>
                        </div>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}