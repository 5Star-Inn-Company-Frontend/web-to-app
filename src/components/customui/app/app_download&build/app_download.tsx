import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AiOutlineDownload, AiOutlineReload } from "react-icons/ai";
import { Text } from "@/components/global/text";
import { OsConfigCard } from "@/components/global/os_config_card";
export const AppDownloadConfig = () => {
    return (
        <div>
            <Button className="flex items-center gap-2 rounded-md mb-4 h-[2.125rem] w-[9.9375rem]">
                <AiOutlineReload size="1.3rem" />
                Rebuild
            </Button>
            <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                <OsConfigCard os="IOS">
                    <div className="flex flex-col gap-x-2 px-5">
                        <Text style="text-sm py-3" value="Source Code" />
                        <Button className="flex items-center gap-x-4 bg-white border text-black mb-3">
                            <AiOutlineReload size="1.4rem" />
                            Rebuild Source
                        </Button>
                        <Text style="text-xs text-primary40 mb-3" value="Last updated Feb 14, 2014 04:40PM" />
                        <Button className="flex items-center gap-2 bg-primary20 mb-3 hover:text-white text-black">
                            <AiOutlineDownload size="1.4rem" />
                            Download Source
                        </Button>
                        <Text
                            style="text-sm text-[grey]"
                            value="An Apple developer account is required to run on a physical device"
                        />
                    </div>
                </OsConfigCard>
                <OsConfigCard os="Android">
                    <div className="flex flex-col gap-x-4 px-5">
                        <Text style="text-sm my-3" value="APK/AAB" />
                        <div className="flex items-center space-x-2 mb-3">
                            <Label htmlFor="airplane-mode" className="text-xs text-primary20 font-normal">
                                SIGN WITH UPLOAD KEYSTORE
                            </Label>
                            <Switch id="airplane-mode" />
                        </div>
                        <Button className="flex items-center gap-2 text-white text-sm font-normal mb-3">
                            <AiOutlineReload size="1.4rem" />
                            Rebuild Binaries
                        </Button>
                        <Text
                            style="text-sm p-4 rounded-md bg-[#E8F2FC] mb-3"
                            value="Your app configuration has been modified. Rebuild to incorporate your changes and our latest updates."
                        />
                        <Button className="flex items-center gap-2 text-white text-sm font-normal mb-3">
                            <AiOutlineReload size="1.4rem" />
                            Build Source
                        </Button>
                        <Text
                            style="text-sm p-4 rounded-md bg-[#E8F2FC]"
                            value="Your app configuration has been modified. Rebuild to incorporate your changes and our latest updates."
                        />
                    </div>
                </OsConfigCard>
            </div>
        </div>
    );
};
