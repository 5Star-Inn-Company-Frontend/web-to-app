import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const DownloadDirConfigCard =()=>{
    return(
        <div className="flex flex-col gap-4 p-2">
            <RadioGroup 
                className="flex flex-col border p-1 border-primary20 flex-grow rounded-md"
                defaultValue="app">
                <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="app" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="app">Files saved private to app</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="folder" id="r2" />
                    <Label className="text-primary40 font-normal" htmlFor="folder">Files saved to download folder</Label>
                </div>
            </RadioGroup>
        </div>
    )
}