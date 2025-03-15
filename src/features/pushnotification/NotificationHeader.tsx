import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";

export default function NotificationHeader() {
    return (
        <div className="px-10 pt-8 border-b">
            <Text style="font-medium text-3xl mb-4" value="Push Notifications" />
            <Button className="bg-deepgray  text-black hover:bg-deepgray w-full">One Signal</Button>
        </div>
    );
}
