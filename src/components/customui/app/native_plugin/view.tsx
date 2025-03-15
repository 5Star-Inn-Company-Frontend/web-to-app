import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Input } from "@/components/ui/input";
import { PluginCard } from "@/features/nativeplugins/PluginCard";
import PluginCardMobile from "@/features/nativeplugins/PluginCardMobile";

const plugins = [
    {
        img: "/native2.png",
        value: "Social Login",
    },
    {
        img: "/native3.png",
        value: "QR/Barcode scanner",
    },
    {
        img: "/native4.png",
        value: "Google Firebase Analytics",
    },
    {
        img: "/native5.png",
        value: "Face ID/Touch ID Android Biomet",
    },
    {
        img: "/native6.png",
        value: "In-App Purchases",
    },
    {
        img: "/native7.png",
        value: "App Review",
    },
    {
        img: "/native8.png",
        value: "Share into app",
    },
    {
        img: "/native9.png",
        value: "Native Datastore",
    },
    {
        img: "/native10.png",
        value: "Background Location",
    },
    {
        img: "/native11.png",
        value: "Haptics",
    },
    {
        img: "/native12.png",
        value: "HapAdMob Native Adstics",
    },
    {
        img: "/native13.png",
        value: "Native Media Player",
    },
    {
        img: "/native14.png",
        value: "Meta App Events",
    },
    {
        img: "/native15.png",
        value: "Native Contacts",
    },
    {
        img: "/native16.png",
        value: "Document Scanner",
    },
    {
        img: "/native17.png",
        value: "Secure Modal (Apple Pay)",
    },
    {
        img: "/native18.png",
        value: "Calendar",
    },
    {
        img: "/native19.png",
        value: "Offline Downloads",
    },
    {
        img: "/native20.png",
        value: "Card.io",
    },
    {
        img: "/native21.png",
        value: "Branch.io",
    },
    {
        img: "/native22.png",
        value: "NFC Tag Scanner",
    },
];

export const NativePluginSection = () => {
    return (
        <>
            <div className="py-5 px-6 w-full xl:px-12 xl:py-8 border-b border-primary20 rounded">
                <Text style="text-[1.7rem] xl:text-4xl font-medium" value="Native Plugin" />
            </div>
            <div className="px-2 py-6 xl:px-8 xl:py-8">
                <CollapsibleComponent title="Available Plugins" subTitle="">
                    <div className="px-4">
                        <Input
                            type="text"
                            className="border w-full px-4"
                            placeholder="Search for an app"
                        />
                    </div>
                </CollapsibleComponent>
            </div>

            <div className="hidden xl:block xl:px-12">
                {plugins.map((plugin) => (
                    <PluginCard img={plugin.img} title={plugin.value} />
                ))}
            </div>
            <div className="xl:hidden px-6 xl:px-12">
                {plugins.map((plugin) => (
                    <PluginCardMobile img={plugin.img} title={plugin.value} />
                ))}
            </div>
        </>
    );
};
