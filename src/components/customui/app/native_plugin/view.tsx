import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Input } from "@/components/ui/input";
import { PluginCard } from "@/features/nativeplugins/PluginCard";
import PluginCardMobile from "@/features/nativeplugins/PluginCardMobile";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IPlugin } from "@/types/type";
import { ChangeEvent, useEffect, useState } from "react";

const pluginImages = {
    one_signal: "/native1.png",
    social_login: "/social_login.png",
    qr_scanner: "/native3.png",
    g_firbase_analytics: "/native4.png",
    biometrics: "/native5.png",
    inapp_purchases: "/native6.png",
    app_review: "/native7.png",
    share_into_app: "/native8.png",
    native_datastore: "/native9.png",
    background_location: "/native10.png",
    haptics: "/native11.png",
    native_media_player: "/native13.png",
    native_contacts: "/native15.png",
    document_scanner: "/native16.png",
    calendar: "/native18.png",
    nfc_scanner: "/native22.png",
    zoom: "/zoom.png",
    konn3ct: "/konn3ct.png",
} as const;

export const NativePluginSection = () => {
    const plugins = useAppSelector((state: RootState) => state.apps.plugin);

    const [filteredPlugin, setFilteredPlugin] = useState<IPlugin[]>(plugins || []);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        setFilteredPlugin(plugins);
    }, [plugins]);

    const filterPlugin = (text: string) => {
        return plugins.filter((plugin) => {
            return plugin.id.includes(text.toLowerCase());
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchInput(text);
        setFilteredPlugin(filterPlugin(text));
    };

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
                            value={searchInput}
                            onChange={handleInputChange}
                            placeholder="Search for an app"
                        />
                    </div>
                </CollapsibleComponent>
            </div>

            <div className="hidden xl:block xl:px-12">
                {filteredPlugin.map((plugin, id) => {
                    const img = pluginImages[plugin.id as keyof typeof pluginImages];
                    return <PluginCard key={id} img={img} {...plugin} />;
                })}
            </div>
            <div className="xl:hidden px-3 mx-auto w-full xl:px-12">
                {filteredPlugin.map((plugin, id) => {
                    const img = pluginImages[plugin.id as keyof typeof pluginImages];
                    return <PluginCardMobile key={id} img={img} {...plugin} />;
                })}
            </div>
        </>
    );
};
