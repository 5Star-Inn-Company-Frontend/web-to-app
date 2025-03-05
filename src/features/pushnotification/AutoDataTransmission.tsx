import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";

export default function AutoDataTransmission() {
    return (
        <CollapseableWithArrow title="Auto Data Transmission">
            <p className="text-sm text-primary60 mb-4">
                Display a native UI within your app which users can use to toggle OneSignal data tags on/off to
                self-manage their subscriptions. Host a JSON file which your app will load dynaically at runtime to
                determine the data tags to display in the UI.
            </p>
            <Input className="px-2 w-full" placeholder="https://www.topwisesz.com/assets/section2_4.271c6ee4" />
        </CollapseableWithArrow>
    );
}
