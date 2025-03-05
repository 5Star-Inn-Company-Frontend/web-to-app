import TopNavigationCollapsable from "../TopNavigationCollapsable";
import PagesToDisplayRadio from "./PagesToDisplayRadio";
import VisualEditorDisplayMode from "./VisualEditorDisplayMode";
import VisualEditorInput from "./VisualEditorInput";
import TextRule from "./TextRule";
import AddPageTitle from "./AddPageTitle";
import TopVisualEditorCTA from "./TopVisualEditorCTA";

export default function VisualEditor() {
    return (
        <TopNavigationCollapsable title="Top Navigate Bar Visual Editor">
            <div className="border border-primary20 p-3 rounded-lg">
                <VisualEditorInput />
                <PagesToDisplayRadio />
                <TextRule />
                <VisualEditorDisplayMode />
                <AddPageTitle />
            </div>
            <TopVisualEditorCTA />
        </TopNavigationCollapsable>
    );
}
