import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Textarea } from "@/components/ui/textarea";
import { updateDescription } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
// import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

export default function AppDescription() {
    const dispatch = useAppDispatch();
    const appDescription = useSelector((state: RootState) => state.app.description);
    const [description, setDescription] = useState(appDescription || "");

    const debounceUpdatedDescription = debounce((newvalue: string) => {
        dispatch(updateDescription(newvalue));
    }, 1000);

    const handleChangeAppDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newvalue = e.target.value;
        setDescription(newvalue);
        debounceUpdatedDescription(newvalue);
    };

    return (
        <div className="px-8 pb-5 bg-white border-t border-primary20">
            <CollapsibleComponent
                title="App Description"
                subTitle="A short description of your app for reference purpose. Only used internally and not not seen by end users."
            >
                <div className="px-8">
                    <Textarea
                        value={description}
                        onChange={handleChangeAppDescription}
                        placeholder="Type your app description here"
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
