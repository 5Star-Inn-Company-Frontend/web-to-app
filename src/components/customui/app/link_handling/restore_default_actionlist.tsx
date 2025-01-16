import { SelectInput } from "@/components/global/selectInput";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoMoveSharp } from "react-icons/io5";
export const RestoreDefaultActionList =()=>{
    return(
        <div className="flex flex-col gap-0">
            {
                [
                    {
                        title:"Non web Link",
                        dropdowns:["App Browser"]
                    },{
                        title:"FaceBook",
                        dropdowns:["App Browser"]
                    },{
                        title:"Twiiter",
                        dropdowns:["App Browser"]
                    },{
                        title:"Instagram",
                        dropdowns:["App Browser"]
                    },{
                        title:"Google map",
                        dropdowns:["App Browser"]
                    },{
                        title:"Google Map Search",
                        dropdowns:["App Browser"]
                    },{
                        title:"All Pages on my domain",
                        dropdowns:["App Browser"]
                    },{
                        title:"All other links",
                        dropdowns:["App Browser"]
                    }
                ]?.map((list,index)=>{
                    return(       
                        <div 
                            className="p-3 first:rounded-t-lg last:rounded-b-lg border border-primary20 last:border-b  border-b-0 "
                            key={index}
                        >
                            <div  className=" rounded-md p-2 border border-primary20">
                                <div className="py-1 px-2 bg-deepgray  flex gap-4 flex-rap items-center rounded-md">

                                <div className="flex gap-4 items-center flex-grow">
                                    <img src="/drag.svg" alt="" />
                                    <Input
                                        type="text"
                                        className="border border-primary60 bg-deepgray px-2"
                                        defaultValue={list.title}
                                    
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <SelectInput
                                        label="App Browser"
                                        placeholder="App Browser"
                                        style="w-full border bg-deepgray"
                                        
                                    >
                                        {
                                            list.dropdowns.map((selectvalue,index)=>{
                                                return(
                                                    <SelectItem 
                                                        value={selectvalue}
                                                        key={index}
                                                    >{selectvalue}
                                                    </SelectItem>
                                                )
                                            })
                                        }
                                    </SelectInput>
                                    <AiOutlineEdit size="1.4rem"/>
                                    <AiOutlineDelete size="1.4rem"/>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}