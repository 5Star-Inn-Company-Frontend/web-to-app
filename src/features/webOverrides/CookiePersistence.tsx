import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CookiePersistence() {
    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Cookie Persistence"
                subTitle="By default, the cookie store in your app will respect the expiry parameters of cookies as received. Using this option you may force the expiry of all cookies to a preset duration. This functionality is useful for extending the duration of login sessions when it is not possible to make changes at the server level."
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex justify-between border p-[0.5rem] rounded-md w-fit gap-8"
                        value={"default"}
                        onValueChange={() => {}}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="custom" id="r2" />
                            <Label htmlFor="r2">Custom</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
