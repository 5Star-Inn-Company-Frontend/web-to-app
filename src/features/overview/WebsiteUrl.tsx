import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Input } from "@/components/ui/input";
import { updateUrl } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function WebsiteUrl() {
    const dispatch = useAppDispatch();
    const appUrl = useSelector((state: RootState) => state.app.name);
    const [url, setUrl] = useState(appUrl || "");

    const debounceUpdatedDescription = debounce((newvalue: string) => {
        dispatch(updateUrl(newvalue));
    }, 1000);

    const handleChangeAppUrl = (e: ChangeEvent<HTMLInputElement>) => {
        const newvalue = e.target.value;
        setUrl(newvalue);
        debounceUpdatedDescription(newvalue);
    };
    return (
        <div className="px-8 bg-white pb-5">
            <CollapsibleComponent title="Website Url" subTitle="The website to display when you loads">
                <Input
                    type="text"
                    className="p-2 w-[90%] mx-auto bg-white border"
                    value={url}
                    onChange={handleChangeAppUrl}
                />
            </CollapsibleComponent>
        </div>
    );
}
