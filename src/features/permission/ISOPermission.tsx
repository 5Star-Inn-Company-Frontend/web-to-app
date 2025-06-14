import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { Input } from "@/components/ui/input";
import { updatePermissionCamera, updatePermissionLocation } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function ISOPermission() {
    const dispatch = useAppDispatch();
    const isoPermissions = useAppSelector((state) => state.apps.permission);

    const isoPermissionsCamera = isoPermissions.camera.ios.description;
    const isoPermissionsMic = isoPermissions.microphone.ios.description;
    const isoPermissionsLocation = isoPermissions.location.ios.description;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const debounceUpdatedPermission = (value: string, fn: (value: string) => any) => {
        dispatch(fn(value));
    };

    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white mb-10">
            <CollapsibleComponent
                title="ISO Permission Description"
                subTitle="Apple requires permission descriptions that accurately represent how your app uses device functionality. Update the defaults when necessary to reflect your specific use case."
            >
                <div className="grid gap-y-5 px-8">
                    <OsConfigCard os="IOS" desc="Location">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value={isoPermissionsLocation}
                                onChange={(e) =>
                                    debounceUpdatedPermission(
                                        e.target.value,
                                        updatePermissionLocation
                                    )
                                }
                            />
                        </div>
                    </OsConfigCard>
                    <OsConfigCard os="IOS" desc="Camera">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value={isoPermissionsCamera}
                                onChange={(e) =>
                                    debounceUpdatedPermission(
                                        e.target.value,
                                        updatePermissionCamera
                                    )
                                }
                            />
                        </div>
                    </OsConfigCard>
                    <OsConfigCard os="IOS" desc="Microphone">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value={isoPermissionsMic}
                                onChange={(e) =>
                                    debounceUpdatedPermission(
                                        e.target.value,
                                        updatePermissionLocation
                                    )
                                }
                            />
                        </div>
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
