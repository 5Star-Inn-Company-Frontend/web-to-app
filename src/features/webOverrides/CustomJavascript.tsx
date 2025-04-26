import { CustomConfigCard } from "@/components/customui/app/web_overides/customcard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { editorOpen } from "@/redux/editor/editorSlice";
import useFile from "@/hooks/useFile";
import Editor from "@/components/Editor";
import { updateCustomScriptAndroid, updateCustomScriptIos } from "@/redux/app/websiteOverideSlice";

export default function CustomJavascript() {
    const dispatch = useAppDispatch();
    const webOverrides = useAppSelector((state: RootState) => state.apps.websiteOveride.script);
    const editorState = useAppSelector((state: RootState) => state.editor);

    const iosScript = webOverrides.ios;
    const androidScript = webOverrides.android;

    const { fetchData: fetchIosScript } = useFile({
        queryKey: ["ios-custom-javascript"],
        url: iosScript,
    });
    const { fetchData: fetchAndroidScript } = useFile({
        queryKey: ["android-custom-javascript"],
        url: androidScript,
    });

    const openCustomJavscriptIosEditor = async () => {
        if (iosScript) {
            await fetchIosScript();
        }
        dispatch(editorOpen("custom-javascript-ios"));
    };
    const openCustomJavscriptAndroidEditor = async () => {
        if (androidScript) {
            await fetchAndroidScript();
        }
        dispatch(editorOpen("custom-javascript-android"));
    };
    return (
        <div className="pt-2 pb-5 xl:p-4 bg-white">
            <CollapsibleComponent
                title="Custom Javascript"
                subTitle={`Enter Custom JavaScript to be injected onto your website pages when they are displayed through your app. For instance, you may find it more convenient to specify JavaScript Bridge commands here rather than adding this code on your website itself. JavaScript added in the top section is injected in both iOS and Android apps or use the platform-specific sections if only needed for one of your apps. Format the JavaScript similar to an external .js file without any HTML or`}
            >
                <div className="grid grid-col-1 gap-8 px-8">
                    <OsConfigCard os="IOS">
                        <CustomConfigCard
                            onClick={openCustomJavscriptIosEditor}
                            title={`${iosScript ? "View/Edit" : "Add"} Custom Javascript`}
                        />
                    </OsConfigCard>
                    <OsConfigCard os="Android">
                        <CustomConfigCard
                            onClick={openCustomJavscriptAndroidEditor}
                            title={`${androidScript ? "View/Edit" : "Add"} Custom Javascript`}
                        />
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>

            {editorState.activeEditor === "custom-javascript-ios" && (
                <Editor
                    editorTitle="IOS Custom JavaScript"
                    type="text/javascript"
                    filename="ios-custom-script.js"
                    dispatchFn={updateCustomScriptIos}
                />
            )}
            {editorState.activeEditor === "custom-javascript-android" && (
                <Editor
                    editorTitle="Android Custom JavaScript"
                    type="text/javascript"
                    filename="android-custom-script.js"
                    dispatchFn={updateCustomScriptAndroid}
                />
            )}
        </div>
    );
}
