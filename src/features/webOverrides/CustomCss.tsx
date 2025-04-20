import { CustomConfigCard } from "@/components/customui/app/web_overides/customcard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { openEditor, openEditorAndroid } from "@/redux/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import EditorCss from "./EditorCss";
import EditorAndroid from "./EditorAndroid";
import { RootState } from "@/redux/store";

export default function CustomCss() {
    const dispatch = useAppDispatch();
    const customCss = useAppSelector((state: RootState) => state.apps.websiteOveride.css);

    const customCssAndroid = customCss.android;
    const customCssIos = customCss.ios;

    const showCustomCss = () => {
        dispatch(openEditor());
    };

    const showCustomCssAndroid = () => {
        dispatch(openEditorAndroid());
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
                <EditorCss />
                <EditorAndroid />
            </CollapsibleComponent>
        </div>
    );
}
