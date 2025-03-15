import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { Text } from "@/components/global/text";
import { updatePullToRefresh } from "@/redux/app/interfaceSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function PullToRefresh() {
    const dispatch = useAppDispatch();
    const pullToRefresh = useSelector((state: RootState) => state.apps.interface.pull_to_refresh);

    const initialValue = useMemo(() => (pullToRefresh ? "on" : "off"), [pullToRefresh]);
    const [enablePullToRefresh, setEnablePullToRefresh] = useState(initialValue);

    useEffect(() => {
        setEnablePullToRefresh(initialValue);
    }, [initialValue]);

    const handleChangePullToRefresh = (newvalue: string) => {
        setEnablePullToRefresh(newvalue);
        const pullToRefreshIsEnabled = newvalue === "on";
        dispatch(updatePullToRefresh(pullToRefreshIsEnabled));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Pull To Refresh"
                subTitle="With native page transitions enabled a loading spinner will show when loading new pages within your app. The current page will fade out, the loading spinner will be displayed, and then the new page will fade in when it has finished loading."
            >
                <div className="grid  lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enablePullToRefresh}
                        onValueChange={handleChangePullToRefresh}
                        radios={[
                            {
                                title: "Off",
                                label: "off",
                            },
                            {
                                title: "On",
                                label: "on",
                            },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={enablePullToRefresh}
                        onValueChange={handleChangePullToRefresh}
                        radios={[
                            {
                                title: "Off",
                                label: "off",
                            },
                            {
                                title: "On",
                                label: "on",
                            },
                        ]}
                    >
                        <div className="px-6">
                            <span className="text-[0.6rem] text-primary80 ">
                                Pull to Refresh Icon Color
                            </span>
                            <div className="w-fit flex justify-between border rounded-md px-2 pr-6 py-1 items-center gap-2 mt-4 mb-4">
                                <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                                <Text style="text-[grey] text-xs" value="#FFFFFF" />
                            </div>
                        </div>
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
