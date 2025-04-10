import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateDownloadDirectory } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export const DownloadDirConfigCard = () => {
    const dispatch = useAppDispatch();
    const downloadDirectory = useAppSelector(
        (state: RootState) => state.apps.permission.downloadsDirectory
    );

    const downloadDirLocation = downloadDirectory.android;

    const handleChangeDownDirectory = (value: string) => {
        dispatch(updateDownloadDirectory(value));
    };

    return (
        <div className="flex flex-col gap-4 p-2">
            <RadioGroup
                value={downloadDirLocation}
                onValueChange={handleChangeDownDirectory}
                className="flex flex-col border p-1 border-primary20 flex-grow rounded-md"
                defaultValue="app"
            >
                <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="internal" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="app">
                        Files saved private to app
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="external" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="folder">
                        Files saved to download folder
                    </Label>
                </div>
            </RadioGroup>
        </div>
    );
};
