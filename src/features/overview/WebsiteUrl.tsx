import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateUrl } from "@/redux/app/appStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent, useEffect, useState } from "react";

export default function WebsiteUrl() {
    const dispatch = useAppDispatch();
    const appUrl = useAppSelector((state: RootState) => state.apps.appState.url);

    const initialValue = appUrl || "";

    const [url, setUrl] = useState(initialValue);

    useEffect(() => {
        setUrl(initialValue);
    }, [initialValue]);

    const handleChangeAppUrl = (e: ChangeEvent<HTMLInputElement>) => {
        const newvalue = e.target.value;
        setUrl(newvalue);
        dispatch(updateUrl(newvalue));
    };

    return (
        <div className="xl:px-8 bg-white pb-5">
            <CollapsibleComponent
                title="Website Url"
                subTitle="The website to display when you loads"
            >
                <Input
                    type="text"
                    className="p-2 mx-auto bg-white border w-[85%] xl:w-[90%]"
                    value={url}
                    onChange={handleChangeAppUrl}
                />
            </CollapsibleComponent>
        </div>
    );
}
