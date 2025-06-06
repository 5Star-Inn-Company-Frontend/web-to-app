import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { OsConfigCard } from "@/components/global/os_config_card";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AppDownloadConfig } from "./app_download";
import { Label } from "@/components/ui/label";
import { CustomConfigCard } from "../web_overides/customcard";
import { GoDownload, GoUpload } from "react-icons/go";
import { FaFileImport } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import Editor from "@/components/Editor";
import { updateGoogleServiceAndroid, updateGoogleServiceIos } from "@/redux/app/buildSettingSlice";
import { editorOpen } from "@/redux/editor/editorSlice";
import useFile from "@/hooks/useFile";

export const AppDownloadSection = () => {
    const dispatch = useAppDispatch();
    const buildSettings = useAppSelector((state: RootState) => state.apps.buildSettings);
    const editor = useAppSelector((state: RootState) => state.editor);

    const appIdentifiers = buildSettings.appIdentifiers;
    const googleServiceIos = buildSettings.google_service.ios;
    const googleServiceAndroid = buildSettings.google_service.android;

    const { fetchData: fetchDataIos } = useFile({
        queryKey: ["google-service-ios"],
        url: googleServiceIos,
    });
    const { fetchData: fetchDataAndroid } = useFile({
        queryKey: ["google-service-android"],
        url: googleServiceAndroid,
    });

    const openGoogleServiceEditor = async () => {
        if (googleServiceIos) {
            await fetchDataIos();
        }
        dispatch(editorOpen("googleServiceIos"));
    };

    const openGoogleJsonEditor = async () => {
        if (googleServiceAndroid) {
            await fetchDataAndroid();
        }
        dispatch(editorOpen("googleServiceAndroid"));
    };

    return (
        <>
            <div className="px-6 xl:px-12 py-8 border-b border-primary20 bg-white w-full rounded">
                <Text
                    style="text-2xl xl:text-4xl font-medium"
                    value="App Download & Build Settings"
                />
            </div>
            <div className="flex gap-1 flex-col">
                <div className="p-4 bg-white border-b border-primary20">
                    <CollapsibleComponent
                        title="App Download"
                        subTitle={`After making changes to your app configuration press "Rebuild" to rebuild your app files for download. To test your iOS app on a physical device build from source using Xcode, an Apple Developer account is required. Your Android app may be built locally using our included Gradle script or using Android Studio.`}
                    >
                        <div className="px-6 xl:px-8">
                            <AppDownloadConfig />
                        </div>
                    </CollapsibleComponent>
                </div>
                <div className="p-4 bg-white border-b border-primary20">
                    <CollapsibleComponent
                        title="App Identifiers"
                        subTitle="Set a Bundle ID and Package Name for publishing. These are identifiers for your app registered with the Apple App Store and Google Play Store. They can be changed for licensed apps at any time before your app is published."
                    >
                        <div className="grid xl:grid-cols-2 gap-y-4 xl:gap-y-0 xl:gap-x-16 px-6 xl:px-8">
                            <OsConfigCard os="IOS">
                                <div className="flex flex-col gap-y-2 py-4 px-3">
                                    <Label
                                        htmlFor="bundle_id"
                                        className="text-[0.625rem] font-normal text-primary40"
                                    >
                                        IOS BUNDLE ID
                                    </Label>
                                    <Input
                                        type="text"
                                        className="h-8 w-full border-none rounded-lg text-[0.625rem] px-2 bg-primary20 text-primary60"
                                        value={appIdentifiers.ios.bundleId}
                                    />
                                </div>
                            </OsConfigCard>
                            <OsConfigCard os="Android">
                                <div className="flex flex-col gap-y-2 py-3 px-3">
                                    <Label
                                        htmlFor="bundle_android_name"
                                        className="text-[0.625rem] font-normal text-primary40"
                                    >
                                        ANDROID BUNDLE NAME
                                    </Label>
                                    <Input
                                        type="text"
                                        className="h-8 w-full border-none rounded-lg text-[0.625rem] px-2 bg-primary20 text-primary60"
                                        value={appIdentifiers.android.packageName}
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2  px-3">
                                    <Label
                                        htmlFor="bundle_andriod_version"
                                        className="text-[0.625rem] font-normal text-primary40"
                                    >
                                        ANDROID VERSION NAME
                                    </Label>
                                    <Input
                                        type="text"
                                        className="h-8 w-full rounded-lg text-[0.625rem] px-2 border border-primary40 text-primary60"
                                        value={appIdentifiers.android.version}
                                    />
                                </div>
                            </OsConfigCard>
                        </div>
                    </CollapsibleComponent>
                </div>
                <div className="p-4 bg-white border-b border-primary20">
                    <CollapsibleComponent
                        title="Google Service"
                        subTitle="Add Google Firebase configuration files to your app automatically. Download the GoogleService-Info.plist file for iOS and google-services.json file for Android and either import the files or copy and paste the contents. This feature is available for licensed apps."
                    >
                        <div className="grid grid-col-1 gap-8 px-6 xl:px-8">
                            <OsConfigCard os="IOS">
                                <CustomConfigCard
                                    onClick={openGoogleServiceEditor}
                                    title={`${
                                        googleServiceIos ? "View/Edit" : "Add"
                                    } GoogleService-info-plist`}
                                />
                            </OsConfigCard>
                            <OsConfigCard os="Android">
                                <CustomConfigCard
                                    onClick={openGoogleJsonEditor}
                                    title={`${
                                        googleServiceAndroid ? "View/Edit" : "Add"
                                    } GoogleService-json`}
                                />
                            </OsConfigCard>
                        </div>
                    </CollapsibleComponent>

                    {/* Google Service info plist editor */}
                    {editor.activeEditor === "googleServiceIos" && (
                        <Editor
                            editorTitle="Google Service Info Plist"
                            filename="Google Service Info Plist"
                            type="application/xml"
                            dispatchFn={updateGoogleServiceIos}
                        />
                    )}

                    {/* Google Service json editor */}
                    {editor.activeEditor === "googleServiceAndroid" && (
                        <Editor
                            editorTitle="Google Service Json"
                            filename="Google Service Json"
                            type="application/json"
                            dispatchFn={updateGoogleServiceAndroid}
                        />
                    )}
                </div>
                <div className="p-4 bg-white border-b border-primary20">
                    <CollapsibleComponent
                        title="Development Tools"
                        subTitle={`To debug JavaScript in your web content from our browser-based simulators first rebuild your app with Web Console Logs enabled. Then, on the simulator panel toggle "Debug" and click "Appetize". The JavaScript console for the app will be shown at the bottom of the window that opens. Note: For Android this option must be disabled when building an APK/AAB for the Google Play Store.`}
                    >
                        <div className="px-6 xl:px-8">
                            <Text
                                style="text-xs text-primary40 font-medium mb-2"
                                value="WEB CONSOLE LOGS"
                            />
                            <RadioGroup
                                className="flex justify-between border border-primary40 w-[40%] p-[0.4rem] flex-grow rounded-md gap-8"
                                defaultValue="disable"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="disable" id="r1" />
                                    <Label htmlFor="disable" className="text-xs">
                                        Disable
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="enable" id="r2" />
                                    <Label htmlFor="enable" className="text-xs">
                                        Enable
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CollapsibleComponent>
                </div>
                <div className="p-4 bg-white">
                    <CollapsibleComponent
                        title="App  Configuration"
                        subTitle="Your entire app is configured using an appConfig.json file. You may Edit/Import/Export the appConfig.json configuration file for your app. If you need to duplicate an existing app you can simply import the corresponding appConfig.json file."
                    >
                        <div className="flex flex-col gap-4 mb-10 px-6 xl:px-8">
                            <div className="flex flex-col gap-2 w-fit">
                                <Label
                                    htmlFor="airplane-mode"
                                    className="text-[grey] text-[0.625rem]"
                                >
                                    EDIT APPCONFIG.JSON
                                </Label>
                                <Button className="flex items-center gap-x-4 bg-white border text-black text-[0.875rem] xl:w-[8.9375rem] w-full">
                                    <AiOutlinePlus size="1rem" />
                                    Edit
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2 w-fit">
                                <Label
                                    htmlFor="airplane-mode"
                                    className="text-[grey] text-[0.625rem]"
                                >
                                    UPLOAD APPCONFIG.JSON
                                </Label>
                                <Button className="flex items-center gap-x-4 bg-white border text-black text-[0.875rem] xl:w-[8.9375rem] w-full">
                                    <GoUpload size="1rem" />
                                    Upload
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2 w-fit">
                                <Label
                                    htmlFor="airplane-mode"
                                    className="text-[grey] text-[0.625rem]"
                                >
                                    EXPORT APPCONFIG.JSON
                                </Label>
                                <Button className="flex items-center gap-x-4 bg-white border text-black text-[0.875rem] xl:w-[8.9375rem] w-full">
                                    <GoDownload size="1rem" />
                                    Export
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2 w-fit">
                                <Label
                                    htmlFor="airplane-mode"
                                    className="text-[grey] text-[0.625rem]"
                                >
                                    IMPORT FROM EXISTING APP
                                </Label>
                                <Button className="flex items-center gap-x-4 bg-white border text-black text-[0.875rem] w-full xl:w-[8.9375rem] ">
                                    <FaFileImport size="1rem" />
                                    import
                                </Button>
                            </div>
                        </div>
                    </CollapsibleComponent>
                </div>
            </div>
        </>
    );
};
