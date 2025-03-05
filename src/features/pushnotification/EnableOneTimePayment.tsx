import { Text } from "@/components/global/text";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function EnableOneTimePayment() {
    return (
        <div className="px-10 py-8 border-b border-primary20">
            <p className="text-sm mb-4 text-primary60">
                OneSignal can be tested during development. A license is required to publish.
            </p>
            <div className="flex items-center gap-x-2 mb-6">
                <Text style="font-semibold text-xl" value="#20,000" />
                <span>one-time payment</span>
            </div>
            <h2> </h2>
            <div className="flex items-center space-x-4">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Add License</Label>
            </div>
        </div>
    );
}
