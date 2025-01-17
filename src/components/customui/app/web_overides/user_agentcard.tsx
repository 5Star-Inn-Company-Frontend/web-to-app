import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

export const UserAgentConfigCard =()=>{
    return(
        <div className="rounded-md px-3 pt-4">
            <RadioGroup 
                className="flex justify-between border border-primary20 p-[0.5rem] flex-grow rounded-md mb-4"
                defaultValue="off">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r1" />
                    <Label className="text-xs" htmlFor="enable">Enable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blocked" id="r2" />
                    <Label className="text-xs" htmlFor="disable">Disable</Label>
                </div>
            </RadioGroup>
            <Input
                className="w-full py-1 px-2 rounded-md border border-primary20"
                type="text"
                placeholder="5starcom"
            />
        </div>
    )
}