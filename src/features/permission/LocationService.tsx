import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateLocationService } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function LocationService() {
    const dispatch = useAppDispatch();
    const locationService = useAppSelector(
        (state: RootState) => state.apps.permission.locationServices
    );

    const locationServiceValue = locationService.android ? "enable" : "disable";

    const handleChangeLocationService = (value: string) => {
        const locationServiceIsEnabled = value === "enable";
        dispatch(updateLocationService(locationServiceIsEnabled));
    };

    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Location Service"
                subTitle="If your app requires access to the device location in Android, you will need to enable this permission and then call a JavaScript Bridge command to request permission at runtime. For iOS, permission is only prompted at runtime. But to avoid both the app and your website prompting twice for location permission, you will need to use the function median_geolocation_ready() which is called when location services are initialized within the app."
            >
                <div className="xl:w-[50%] px-8">
                    <OsConfigCard
                        os="Android"
                        value={locationServiceValue}
                        onValueChange={handleChangeLocationService}
                        radios={[
                            { title: "Disable", label: "disable" },
                            { title: "Enable", label: "enable" },
                        ]}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
