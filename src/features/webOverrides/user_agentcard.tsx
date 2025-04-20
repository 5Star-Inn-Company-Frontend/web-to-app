import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { updateUserAgentIos } from "@/redux/app/websiteOverideSlice";

export const UserAgentConfigCard = () => {
    const dispatch = useDispatch();
    const userAgentStore = useAppSelector(
        (state: RootState) => state?.apps?.websiteOveride.customUserAgent.ios
    );

    const handleChangeUserAgent = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        dispatch(updateUserAgentIos(text));
    };

    return (
        <div className="rounded-md px-3 pt-4">
            <Input
                className="w-full py-1 px-2 rounded-md border border-primary20"
                type="text"
                value={userAgentStore}
                onChange={handleChangeUserAgent}
                placeholder="5starcom"
            />
        </div>
    );
};
