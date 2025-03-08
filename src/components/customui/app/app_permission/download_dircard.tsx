import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateDownloadDirectory } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export const DownloadDirConfigCard = () => {
    const dispatch = useAppDispatch();
    const downloadDirectory = useAppSelector(
        (state: RootState) => state.apps.permission.downloads_directory
    );

    const initialValue = downloadDirectory || "files saved private to app";
    const [downloadDirLocation, setDownloadDirLocation] = useState(initialValue);

    useEffect(() => {
        setDownloadDirLocation(initialValue);
    }, [initialValue]);

    const handleChangeDownDirectory = (value: string) => {
        setDownloadDirLocation(value);

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
                    <RadioGroupItem value="files saved private to app" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="app">
                        Files saved private to app
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="files saved to download folder" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="folder">
                        Files saved to download folder
                    </Label>
                </div>
            </RadioGroup>
        </div>
    );
};
