import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Button } from "@/components/ui/button"

export const AppCustomDevelopement =()=>{
    return(
        <div>
            <CollapsibleComponent
                    title="Custom Mobile Developement"
                    subTitle=""
                >
                    <div className="px-8">
                        <ul className="text-xs text-[grey] gap-8 list-disc grid gap-y-5 px-4 mb-5">
                            <li>Does your app need additional native functionality? Do you need a vendor provided iOS or Android native SDK integrated?</li>
                            <li>Median's engineering team can build a custom plugin to meet your requirements.</li>
                            <li>Custom plugins typically provide the additional required native functionality such as SDK functions through the Median JavaScript Bridge.</li>
                            <li>Custom plugins integrate into your existing app through our online build platform allowing you to continue building your app online and to receive ongoing updates.</li>
                            <li>Please provide us with your requirements and we look forward to assisting you with your project.</li>
                        </ul>
                        <Button className="bg-black text-white w-[8.5rem] rounded-xl">
                            Contact us
                        </Button>
                    </div>
                </CollapsibleComponent>
        </div>
)
}