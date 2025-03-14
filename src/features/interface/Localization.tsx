import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { updateLocalization } from "@/redux/app/interfaceSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const languages: string[] = [
    "English",
    "Arabic",
    "Catain",
    "Chinese",
    "Danish",
    "Dutch",
    "Finnish",
    "French",
    "Hebrew",
    "Others",
];

export default function Localization() {
    const dispatch = useAppDispatch();
    const localizations = useSelector((state: RootState) => state.apps.interface.localization);

    const checkedLocalizations = useMemo(
        () => localizations.map((local) => local.toLowerCase() || []),
        [localizations]
    );

    const handleCheckChange = useCallback(
        (checked: boolean | string, lang: string) => {
            const newLocalizations = checked
                ? [...localizations, lang]
                : localizations.filter((local) => local.toLowerCase() !== lang.toLowerCase());

            dispatch(updateLocalization(newLocalizations));
        },
        [dispatch, localizations]
    );

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Localization"
                subTitle={`By default your user's default device language will be set within your app for all web content which will then display in the corresponding language in the same manner it is displayed in a regular browser, i.e. if there is an Accept-Language header present. The native UI components in the native app layer have been localized to various languages as contributed by customers. These must be selected to enable for your app.`}
            >
                <div className="grid border border-primary40 p-5 mx-9 lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    {languages.map((lang, index) => {
                        return (
                            <div className="flex-grow" key={index}>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        value={lang}
                                        id="r1"
                                        checked={checkedLocalizations.includes(lang.toLowerCase())}
                                        onCheckedChange={(checked) =>
                                            handleCheckChange(checked, lang)
                                        }
                                    />
                                    <Label className="text-primary60" htmlFor={lang}>
                                        {lang}
                                    </Label>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CollapsibleComponent>
        </div>
    );
}
