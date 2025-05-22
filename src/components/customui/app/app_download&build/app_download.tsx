import { Button } from "@/components/ui/button";
import { AiOutlineDownload, AiOutlineReload } from "react-icons/ai";
import { Text } from "@/components/global/text";
import { OsConfigCard } from "@/components/global/os_config_card";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { formatDate } from "@/utils/dateFormatter";
import { IoQrCodeOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import ModalDialog from "@/components/ModalDialog";
import { useState } from "react";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import QRcode from "@/lib/qrcode";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CopyButton } from "@/lib/copyToClipboard";
import { useMutation } from "@tanstack/react-query";
import { buildAppAndroid } from "@/api/app";

export const AppDownloadConfig = () => {
    const app = useAppSelector((state: RootState) => state.apps);

    const buildSettings = app.buildSettings;
    const privateKey = app.appState.private_link;

    const [open, setOpen] = useState(false);

    const downloadLinks = buildSettings.downloadLinks;
    const iosLastBuiltDate = buildSettings.iosLastBuiltDate;
    const androidLastBuiltDate = buildSettings.androidLastBuiltDate;
    const androidLastBuildBy = buildSettings.androidLastBuiltBy;
    const iosLastBuildBy = buildSettings.iosLastBuiltBy;

    const { mutate, isPending } = useMutation({
        mutationKey: ["buildApp"],
        mutationFn: buildAppAndroid,
    });

    const handleRebuildApp = () => {
        mutate({ appId: privateKey });
    };

    return (
        <div>
            <Button
                onClick={handleRebuildApp}
                className="flex items-center gap-2 rounded-md mb-4 h-[2.125rem] w-[9.9375rem]"
            >
                <AiOutlineReload size="1.3rem" className={`${isPending ? "animate-spin" : ""}`} />
                Rebuild
            </Button>
            <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                <OsConfigCard os="IOS">
                    <div className="flex flex-col gap-x-2 px-5">
                        <Text style="text-sm py-3" value="Source Code" />
                        <Button className="flex items-center gap-x-4 hover:text-white bg-white border text-black mb-3">
                            <AiOutlineReload size="1.4rem" />
                            {downloadLinks.iosLink ? "Rebuild" : "Build"} Source
                        </Button>
                        {iosLastBuildBy.source && iosLastBuiltDate.source && (
                            <Text
                                style="text-xs text-primary40 mb-3"
                                value={`last updated ${formatDate(iosLastBuiltDate.source)} by ${
                                    iosLastBuildBy.source
                                }`}
                            />
                        )}

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
                        <Button className="flex items-center gap-2 text-white text-sm font-normal mb-3">
                            <AiOutlineReload size="1.4rem" />
                            {downloadLinks.androidLink ? "Rebuild" : "Build"} Source
                        </Button>
                        {androidLastBuildBy.source && androidLastBuiltDate.source && (
                            <Text
                                style="text-xs text-primary40 mb-3"
                                value={`last updated ${formatDate(
                                    androidLastBuiltDate.source
                                )} by ${androidLastBuildBy.source}`}
                            />
                        )}
                        <div>
                            <Button className="flex items-center gap-2 bg-primary20 mb-3 hover:text-white text-black w-full">
                                <GoDownload size="1.4rem" />
                                Download APK
                            </Button>
                            <Button className="flex items-center gap-2 bg-primary20 mb-3 hover:text-white text-black w-full">
                                <GoDownload size="1.4rem" />
                                Download AAB
                            </Button>
                            <Button
                                onClick={() => setOpen(true)}
                                className="flex items-center gap-2 bg-primary20 mb-3 hover:text-white text-black w-full"
                            >
                                <IoQrCodeOutline size="1.4rem" />
                                Install on Device
                            </Button>
                        </div>

                        <Text
                            style="text-sm p-4 rounded-md bg-[#E8F2FC]"
                            value="Your app configuration has been modified. Rebuild to incorporate your changes and our latest updates."
                        />
                    </div>
                </OsConfigCard>
            </div>
            <ModalDialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogTitle className="flex justify-center">
                    <div>
                        <img src="/logo.svg" alt="logo" className="mx-auto rounded-lg" />
                        <h2 className="text-lg mt-3 mb-6">Portal Home - 5Star Company</h2>
                    </div>
                </DialogTitle>
                <DialogDescription className="w-[86%] mx-auto flex flex-col justify-center items-center text-center">
                    <p>
                        Scan the QR code to launch this page on your Android device and then
                        download and install the APK.
                    </p>
                    <div className="my-4">
                        <QRcode value={downloadLinks.androidLink} />
                    </div>
                    <Button className="flex items-center gap-4 bg-white border w-[85%] border-black mb-3 hover:text-white text-black">
                        <GoDownload size="1.4rem" />
                        Download APK
                    </Button>
                    <div className="flex items-center justify-center w-[85%]">
                        <CopyButton textToCopy={downloadLinks.androidLink} />
                    </div>
                    <p>After downloading open the APK and accept all prompts</p>
                    <p className="flex items-center gap-x-1">
                        Learn more in our{" "}
                        <Link className="underline" to="#">
                            documentation
                        </Link>
                        <HiOutlineExternalLink />
                    </p>
                </DialogDescription>
            </ModalDialog>
        </div>
    );
};
