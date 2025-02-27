import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import LinkHandlingRadio from "./LinkHandlingRadio";

export default function NewWindows() {
    return (
        <div className="px-4 py-8 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="New windows"
                subTitle="By default a URL specified in the window.open() JavaScript function will load in a new window within your app similar to how a browser opens a new tab. When new windows are blocked your app will instead open the URL in the current webview. You can also use the Median Javascript Bridge to manually open and close webview windows."
            >
                <LinkHandlingRadio />
            </CollapsibleComponent>
        </div>
    );
}
