import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateUrlScheme } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function UniversalLinkUrl() {
    const dispatch = useAppDispatch();
    const urlProtocol = useAppSelector(
        (state: RootState) => state.apps.linkHandling.urlSchemeProtocol
    );

    return (
        <div className="py-4 xl:px-4 xl:py-16 mb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="URL Schemes Protocol"
                subTitle="URL Schemes are an advanced configuration option used to define a non-standard link format that will only open in your app and not in the device browser e.g. youruniquestring://yoursite.com/path. This functionality is helpful in authentication redirect flows or for a more seamless user experience. URL Schemes will only work on mobile devices and are not compatible with desktop browsers. We recommend only experienced developers implement this functionality."
            >
                <div className="px-8">
                    <Input
                        type="text"
                        className="p-2 mt-6 rounded border border-primary20"
                        placeholder="e.g youruniquestring"
                        value={urlProtocol}
                        onChange={(e) => dispatch(updateUrlScheme(e.target.value))}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
