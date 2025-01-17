import { Button } from "@/components/ui/button"
import { AiOutlinePlus} from "react-icons/ai"

export const CustomConfigCard =({
    title
}:{
    title:string
})=>{
    return(
        <div className="p-4 rounded-md">
            <div>
                <Button className="flex items-center gap-2 bg-white font-normal  text-black m-auto hover:text-white">
                    <AiOutlinePlus size="1.4rem"/>
                    Add {title}
                </Button>
            </div>
        </div>
    )
}