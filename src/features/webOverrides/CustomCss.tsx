import { CustomConfigCard } from "@/components/customui/app/web_overides/customcard";
import Editor from "@/components/Editor";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import useFile from "@/hooks/useFile";
import { updateCustomCssAndroid, updateCustomCssIos } from "@/redux/app/websiteOverideSlice";
import { editorOpen } from "@/redux/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function CustomCss() {
    const dispatch = useAppDispatch();
    const customCss = useAppSelector((state: RootState) => state.apps.websiteOveride.css);
    const editor = useAppSelector((state: RootState) => state.editor);

    const customCssAndroid = customCss.android;
    const customCssIos = customCss.ios;

    const { fetchData: fetchCssIos } = useFile({
        queryKey: ["custom-css-ios"],
        url: customCssIos,
    });
    const { fetchData: fetchCssAndroid } = useFile({
        queryKey: ["custom-css-android"],
        url: customCssAndroid,
    });

    const showCustomCss = async () => {
        if (customCssIos) {
            await fetchCssIos();
        }
        dispatch(editorOpen("customCssIos"));
    };

    const showCustomCssAndroid = async () => {
        if (customCssAndroid) {
            await fetchCssAndroid();
        }
        dispatch(editorOpen("customCssAndroid"));
    };

    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Custom Css"
                subTitle={`Custom CSS rules are applied to your website when it is displayed through your app. For instance, within your app you may need to hide navigation elements such as a footer menu or overlay elements such as a chat widget. CSS rules added in the top section are added to both iOS and Android apps.`}
            >
                <div className="grid grid-col-1 gap-8 px-8">
                    <OsConfigCard os="IOS">
                        <CustomConfigCard
                            onClick={showCustomCss}
                            title={`${customCssIos ? "View/Edit Css" : "Add Custom CSS"}`}
                        />
                    </OsConfigCard>
                    <OsConfigCard os="Android">
                        <CustomConfigCard
                            onClick={showCustomCssAndroid}
                            title={`${customCssAndroid ? "View/Edit Css" : "Add Custom CSS"}`}
                        />
                    </OsConfigCard>
                </div>

                {/* CUSTOM CSS EDITOR IOS */}
                {editor.activeEditor === "customCssIos" && (
                    <Editor
                        editorTitle="Custom CSS IOS"
                        type="text/css"
                        filename="custom-css-ios.css"
                        dispatchFn={updateCustomCssIos}
                    />
                )}

                {/* CUSTOM CSS EDITOR ANDROID */}
                {editor.activeEditor === "customCssAndroid" && (
                    <Editor
                        editorTitle="Custom CSS Android"
                        type="text/css"
                        filename="custom-css-android.css"
                        dispatchFn={updateCustomCssAndroid}
                    />
                )}
            </CollapsibleComponent>
        </div>
    );
}
