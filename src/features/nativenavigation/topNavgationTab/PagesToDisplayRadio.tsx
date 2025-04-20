import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PagesToDisplayRadio() {
    return (
        <>
            <Label className="font-normal my-5 block">Pages to Display Top Nav Bar</Label>
            <RadioGroup
                value={"multiple pages"}
                onValueChange={() => {}}
                className="flex justify-between items-center p-1 rounded-md border border-primary20"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single page" id="r1" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r1">
                        Single Page
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple pages" id="r2" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r2">
                        Multiple Pages
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all pages" id="r3" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                        All Pages
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="r3" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                        Custom
                    </Label>
                </div>
            </RadioGroup>
        </>
    );
}
