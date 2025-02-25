import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateName } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function AppName() {
    const dispatch = useAppDispatch();
    const appName = useSelector((state: RootState) => state.app.name);
    const [name, setName] = useState(appName || "");

    const debounceUpdatedDescription = debounce((newvalue: string) => {
        dispatch(updateName(newvalue));
    }, 1000);

    const handleChangeAppName = (e: ChangeEvent<HTMLInputElement>) => {
        const newvalue = e.target.value;
        setName(newvalue);
        debounceUpdatedDescription(newvalue);
    };
    return (
        <div className="px-8 pb-5 bg-white border-t border-primary20">
            <CollapsibleComponent title="App Name" subTitle="Your name is displayed on the device homescreen">
                <Input type="text" className="border w-[90%] mx-auto p-2" value={name} onChange={handleChangeAppName} />
            </CollapsibleComponent>
        </div>
    );
}
