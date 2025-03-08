import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function EnableLegacyMode() {
    return (
        <CollapseableWithArrow title="Legacy Mode">
            <p className="text-sm text-primary60 mb-4">
                Your app will integrate with the latest OneSignal SDKs and user-centric data model
                by default. Legacy mode provides support for OneSignal’s v4 SDKs and their previous
                device-centric data model. To migrate your app from legacy mode to the latest SDKs
                disable this setting and refer to OneSignal’s User Model Migration Guide as linked
                in our documentation.
            </p>
            <RadioGroup className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disable" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        Disable
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Enable
                    </Label>
                </div>
            </RadioGroup>
        </CollapseableWithArrow>
    );
}
