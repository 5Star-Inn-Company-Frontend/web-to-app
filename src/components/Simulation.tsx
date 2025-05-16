import { SelectInput } from "@/components/global/selectInput";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    AiOutlineCamera,
    AiOutlineHome,
    AiOutlinePicture,
    AiOutlineReload,
    AiOutlineRotateLeft,
    AiOutlineUpload,
} from "react-icons/ai";
import { SelectItem } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Simulation = () => {
    return (
        <div className="bg-white flex flex-col gap-4 w-full p-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Text style="text-sm text-start text-[grey]" value="Simulator" />
                    <img src="/export.svg" alt="" />
                </div>
                <div className="bg-[#f9fafb] rounded-full p-2">
                    <img src="/chevron-right.svg" alt="" />
                </div>
            </div>
            <Tabs defaultValue="iphone" className="">
                <TabsList>
                    <TabsTrigger value="iphone">Iphone</TabsTrigger>
                    <TabsTrigger value="androidphone">Android Phone</TabsTrigger>
                    <TabsTrigger value="ipad">Ipad</TabsTrigger>
                    <TabsTrigger value="andriodtablet">Android Tablet</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

            <div className="flex justify-between w-full gap-2">
                <SelectInput label="100%" placeholder="100%" style="4rem border">
                    {[
                        {
                            title: "200%",
                            value: "200%",
                        },
                    ].map((selectvalue, index) => {
                        const { title, value } = selectvalue;
                        return (
                            <SelectItem value={value} key={index}>
                                {title}
                            </SelectItem>
                        );
                    })}
                </SelectInput>
                <div className="p-2 rounded-md border">
                    <AiOutlineRotateLeft size="1.3rem" color="grey" />
                </div>
                <div className="p-2 rounded-md border">
                    <AiOutlinePicture size="1.3rem" color="grey" />
                </div>
                <div className="p-2 rounded-md border">
                    <AiOutlineHome size="1.3rem" color="grey" />
                </div>
                <div className="p-2 rounded-md border">
                    <AiOutlineCamera size="1.3rem" color="grey" />
                </div>
            </div>
            <div className="flex gap-4 justify-between">
                <Button className="flex items-center gap-1 text-sm text-dark bg-white cursor-pointer justify-between border">
                    <AiOutlineUpload size="1.3rem" color="black" />
                    Download
                </Button>
                <Button className="flex items-center gap-2 bg-black text-white border">
                    <AiOutlineReload color="white" />
                    Rebuild
                </Button>
            </div>
            {/* fmqq7qzvixslp3gixcutxep3cy */}

            <div className="relative w-full max-w-[320px] mx-auto h-[650px]">
                {/* Device mockup image (container) */}
                <img
                    src="/androidF.png"
                    className="w-full h-full object-contain"
                    alt="Phone mockup"
                />

                {/* Iframe (positioned over the screen area) */}
                <div className="absolute top-[29px] left-[20px] w-[calc(100%-45px)] h-[calc(100%-40px)] overflow-x-hidden">
                    <iframe
                        id="appetize"
                        src="https://web2app.prisca.5starcompany.com.ng/#/preview/pl12sai5PDoIN3NpC5NQ"
                        className="w-full h-full rounded-lg object-center object-cover" // Adjust rounded corners to match mockup
                        allow="fullscreen"
                    ></iframe>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <SelectInput label="Iphone 14pro" placeholder="Iphone 14pro" style="4rem border">
                    {[
                        {
                            title: "200%",
                            value: "200%",
                        },
                    ].map((selectvalue, index) => {
                        const { title, value } = selectvalue;
                        return (
                            <SelectItem value={value} key={index}>
                                {title}
                            </SelectItem>
                        );
                    })}
                </SelectInput>
                <SelectInput label="IOS 17.2" placeholder="IOS 17.2" style="4rem border">
                    {[
                        {
                            title: "200%",
                            value: "200%",
                        },
                    ].map((selectvalue, index) => {
                        const { title, value } = selectvalue;
                        return (
                            <SelectItem value={value} key={index}>
                                {title}
                            </SelectItem>
                        );
                    })}
                </SelectInput>
            </div>
            <div className="flex items-center space-x-2 text-primary40 text-sm">
                <Label htmlFor="airplane-mode" className="text-xs">
                    DEMUG MODE
                </Label>
                <Switch id="airplane-mode" />
            </div>
        </div>
    );
};
