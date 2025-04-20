import { CustomConfigCard } from "@/components/customui/app/web_overides/customcard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import EditorJavaScript from "./EditorJavaScript";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { fileUpload } from "@/api/app";
import {
    closeEditorJSAndroid,
    closeEditorJSIos,
    setCssContentJSAndroid,
    setCssContentJSIos,
} from "@/redux/editor/editorSlice";
import { updateCustomScriptAndroid, updateCustomScriptIos } from "@/redux/app/websiteOverideSlice";
import { createCssFile } from "@/utils/fileHandler";

export default function CustomJavascript() {
    const dispatch = useAppDispatch();
    const editorState = useAppSelector((state: RootState) => state.editor);

    const editorStateIos = editorState.jsIos;
    const editorStateAndroid = editorState.jsAndroid;

    const { isPending, mutate } = useMutation({
        mutationFn: fileUpload,
        onSuccess: (data) => {
            dispatch(updateCustomScriptAndroid(data));
        },
    });

    const { isPending: isPendingIos, mutate: mutateIos } = useMutation({
        mutationFn: fileUpload,
        onSuccess: (data) => {
            dispatch(updateCustomScriptIos(data));
        },
    });

    const handleSaveScriptIos = () => {
        try {
            const cssFile = createCssFile(
                editorStateIos.jsContent,
                "text/javascript",
                "custom-css-ios.css"
            );
            mutateIos(cssFile);
        } catch (error) {
            console.error("Error saving CSS:", error);
        }
    };
    const handleSaveScriptAndroid = () => {
        try {
            const cssFile = createCssFile(
                editorStateAndroid.jsContent,
                "text/javascript",
                "custom-css-ios.css"
            );
            mutate(cssFile);
        } catch (error) {
            console.error("Error saving CSS:", error);
        }
    };
    return (
        <div className="pt-2 pb-5 xl:p-4 bg-white">
            <CollapsibleComponent
                title="Custom Javascript"
                subTitle={`Enter Custom JavaScript to be injected onto your website pages when they are displayed through your app. For instance, you may find it more convenient to specify JavaScript Bridge commands here rather than adding this code on your website itself. JavaScript added in the top section is injected in both iOS and Android apps or use the platform-specific sections if only needed for one of your apps. Format the JavaScript similar to an external .js file without any HTML or`}
            >
                <div className="grid grid-col-1 gap-8 px-8">
                    <OsConfigCard os="IOS">
                        <CustomConfigCard title="Add Custom Javascript" />
                    </OsConfigCard>
                    <OsConfigCard os="Android">
                        <CustomConfigCard title="Add Custom Javascript" />
                    </OsConfigCard>
                </div>
                <EditorJavaScript
                    isOpen={editorStateIos.isOpen}
                    content={editorStateIos.jsContent}
                    handleSave={handleSaveScriptIos}
                    onChangeContent={(e) => dispatch(setCssContentJSIos(e.target.value))}
                    toggleEditor={() => dispatch(closeEditorJSIos())}
                    loading={isPendingIos}
                />
                <EditorJavaScript
                    isOpen={editorStateAndroid.isOpen}
                    content={editorStateAndroid.jsContent}
                    handleSave={handleSaveScriptAndroid}
                    onChangeContent={(e) => dispatch(setCssContentJSAndroid(e.target.value))}
                    toggleEditor={() => dispatch(closeEditorJSAndroid())}
                    loading={isPending}
                />
            </CollapsibleComponent>
        </div>
    );
}
