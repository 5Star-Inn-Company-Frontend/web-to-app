import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateName } from "@/redux/app/appStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";

export default function AppName() {
    const dispatch = useAppDispatch();
    const appName = useAppSelector((state: RootState) => state.apps.appState.name);

    const initialValue = appName || "";

    const [name, setName] = useState(appName || "");

    useEffect(() => {
        setName(initialValue);
    }, [initialValue]);

    const debounceUpdatedName = debounce((newvalue: string) => {
        dispatch(updateName(newvalue));
    }, 2000);

    const handleChangeAppName = (e: ChangeEvent<HTMLInputElement>) => {
        const newvalue = e.target.value;
        setName(newvalue);
        debounceUpdatedName(newvalue);
    };
    return (
        <div className="px-8 pb-5 bg-white border-t border-primary20">
            <CollapsibleComponent
                title="App Name"
                subTitle="Your name is displayed on the device homescreen"
            >
                <Input
                    type="text"
                    className="border w-[90%] mx-auto p-2"
                    value={name}
                    onChange={handleChangeAppName}
                />
            </CollapsibleComponent>
        </div>
    );
}
