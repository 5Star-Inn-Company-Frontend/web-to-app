import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Text } from "@/components/global/text"

export const WebRtcConfigCard =({
    radios
}:{
    radios:{
        title:string,
        label:string
    }[]
})=>{
    return(
        <div className="p-3">
            <Text
                style="text-xs font-light uppercase mb-2"
                value="Microphone"
            />
            <RadioGroup 
                className="flex justify-between border border-primary20 rounded-lg p-[0.5rem] flex-grow mb-2"
                defaultValue="off">
                    {
                        radios.map((rad,index)=>{
                            const{
                                title,
                                label
                            }=rad;
                            return(
                                <div 
                                    className="flex items-center space-x-2"
                                    key={index}
                                >
                                    <RadioGroupItem value={label} id="r1" />
                                    <Label className="text-xs" htmlFor={label}>{title}</Label>
                                </div>
                            )
                        })
                    }
            </RadioGroup>
            <Text
                style="text-xs font-light uppercase mb-2"
                value="Camera"
            />
            <RadioGroup 
                className="flex justify-between border border-primary20 rounded-lg p-[0.5rem] flex-grow "
                defaultValue="off">
                    {
                        radios.map((rad,index)=>{
                            const{
                                title,
                                label
                            }=rad;
                            return(
                                <div 
                                    className="flex items-center space-x-2"
                                    key={index}
                                >
                                    <RadioGroupItem value={label} id="r1" />
                                    <Label className="text-xs" htmlFor={label}>{title}</Label>
                                </div>
                            )
                        })
                    }
            </RadioGroup>
        </div>
    )
}