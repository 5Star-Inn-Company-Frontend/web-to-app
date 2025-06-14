import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateName } from "@/redux/app/appStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent, useEffect, useState } from "react";

export default function AppName() {
    const dispatch = useAppDispatch();
    const appName = useAppSelector((state: RootState) => state.apps.appState.name);

    const initialValue = appName || "";

    const [name, setName] = useState(appName || "");

    useEffect(() => {
        setName(initialValue);
    }, [initialValue]);

    const handleChangeAppName = (e: ChangeEvent<HTMLInputElement>) => {
        const newvalue = e.target.value;
        setName(newvalue);
        dispatch(updateName(newvalue));
    };
    return (
        <div className="xl:px-8 pb-5 bg-white border-t border-primary20">
            <CollapsibleComponent
                title="App Name"
                subTitle="Your name is displayed on the device homescreen"
            >
                <Input
                    type="text"
                    className="border w-[83%] mx-auto p-2 xl:w-[90%]"
                    value={name}
                    onChange={handleChangeAppName}
                />
            </CollapsibleComponent>
        </div>
    );
}
