import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Input } from "@/components/ui/input"
import { PluginCard } from "@/features/nativeplugins/PluginCard"



const plugins = [
    {
        img: "/native2.png",
        value: "Social Login",
    }, {
        img: "/native3.png",
        value: "QR/Barcode scanner",
    }, {
        img: "/native4.png",
        value: "Google Firebase Analytics",
    }, {
        img: "/native5.png",
        value: "Face ID/Touch ID Android Biomet",
    }, {
        img: "/native6.png",
        value: "In-App Purchases",
    }, {
        img: "/native7.png",
        value: "App Review",
    }, {
        img: "/native8.png",
        value: "Share into app",
    }, {
        img: "/native9.png",
        value: "Native Datastore",
    }, {
        img: "/native10.png",
        value: "Background Location",
    }, {
        img: "/native11.png",
        value: "Haptics",
    }, {
        img: "/native12.png",
        value: "HapAdMob Native Adstics",
    }, {
        img: "/native13.png",
        value: "Native Media Player",
    }, {
        img: "/native14.png",
        value: "Meta App Events",
    }, {
        img: "/native15.png",
        value: "Native Contacts",
    }, {
        img: "/native16.png",
        value: "Document Scanner",
    }, {
        img: "/native17.png",
        value: "Secure Modal (Apple Pay)",
    }, {
        img: "/native18.png",
        value: "Calendar",
    }, {
        img: "/native19.png",
        value: "Offline Downloads",
    }, {
        img: "/native20.png",
        value: "Card.io",
    }, {
        img: "/native21.png",
        value: "Branch.io",
    }, {
        img: "/native22.png",
        value: "NFC Tag Scanner",
    }]

export const NativePluginSection = () => {
    return (
        <>
            <div className="px-12 py-8 border-b border-primary20 bg-white w-full rounded">
                <Text
                    style="text-4xl font-medium"
                    value="Native Plugin"
                />
            </div>
            <div className="px-8 py-8 bg-white">
                <CollapsibleComponent
                    title="Available Plugins"
                    subTitle=""
                >
                    <Input
                        type="text"
                        className="border w-full px-4"
                        placeholder="Search for an app"
                    />
                </CollapsibleComponent>
            </div>

            <div className="px-12">
                {plugins.map((plugin) => (<PluginCard img={plugin.img} title={plugin.value} />))}
            </div>
        </>
    )
}

