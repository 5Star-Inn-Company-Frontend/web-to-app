import { getShareAppDetails } from "@/api/app";
import { SelectInput } from "@/components/global/selectInput";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShareSkeleton } from "@/features/share/share-skeleton";
import { useQuery } from "@tanstack/react-query";
import {
    AiOutlineCamera,
    AiOutlineHome,
    AiOutlinePicture,
    AiOutlineRotateLeft,
} from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { MdContentCopy, MdQrCode } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function Share() {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["share", id],
        queryFn: () => getShareAppDetails(id!),
    });

    if (isLoading) {
        return <ShareSkeleton />;
    }

    console.log(error);

    return (
        <div className="bg-primary5 px-2 py-8 xl:p-8">
            <div className="flex flex-col items-center justify-center mb-4">
                <img src="/savebill.svg" alt="savebill" className="mb-1 w-[70px] h-[70px]" />
                <h1 className="font-bold text-2xl">Savebills</h1>
            </div>
            <div className="bg-white rounded-2xl flex flex-col gap-4 w-full mx-auto max-w-[420px] p-4 xl:p-10">
                <Tabs defaultValue="iphone" className="">
                    <TabsList className="w-full text-left flex justify-start items-center">
                        <TabsTrigger className="text-left" value="iphone">
                            Iphone
                        </TabsTrigger>
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
                        <AiOutlineHome size="1.3rem" color="grey" />
                    </div>
                    <div className="p-2 rounded-md border">
                        <AiOutlinePicture size="1.3rem" color="grey" />
                    </div>

                    <div className="p-2 rounded-md border">
                        <AiOutlineCamera size="1.3rem" color="grey" />
                    </div>
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
                            src={`https://web2app.prisca.5starcompany.com.ng/#/preview/${data.privateKey}`}
                            className="w-full h-full rounded-lg object-center object-cover" // Adjust rounded corners to match mockup
                            allow="fullscreen"
                        ></iframe>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <SelectInput
                        label="Iphone 14pro"
                        placeholder="Iphone 14pro"
                        style="4rem border"
                    >
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
                <Button className="flex items-center justify-center gap-4 bg-white border w-[85%] mx-auto border-black hover:text-white text-black">
                    <GoDownload size="1.4rem" />
                    Download APK
                </Button>
                <Button className="flex items-center justify-center gap-4 bg-white border w-[85%] mx-auto border-black hover:text-white text-black">
                    <MdQrCode size="1.4rem" />
                    Install APK on Device
                </Button>
                <Button className="flex items-center justify-center gap-4 mb-8 bg-black text-white border w-[85%] mx-auto border-black hover:text-white">
                    <MdContentCopy size="1.4rem" />
                    Clone App on 5starcompany
                </Button>
            </div>
        </div>
    );
}
