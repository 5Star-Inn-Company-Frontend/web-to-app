import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent, useEffect, useState } from "react";
import { updateUserAgent } from "@/redux/app/websiteOverideSlice";

export const UserAgentConfigCard = () => {
    const dispatch = useDispatch();
    const userAgentStore = useAppSelector(
        (state: RootState) => state?.apps?.websiteOveride.user_agent
    );

    const [userAgent, setUserAgent] = useState(userAgentStore);

    useEffect(() => {
        setUserAgent(userAgentStore);
    }, [userAgentStore]);

    const handleChangeUserAgent = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setUserAgent(text);
        dispatch(updateUserAgent(text));
    };

    return (
        <div className="rounded-md px-3 pt-4">
            <Input
                className="w-full py-1 px-2 rounded-md border border-primary20"
                type="text"
                value={userAgent}
                onChange={handleChangeUserAgent}
                placeholder="5starcom"
            />
        </div>
    );
};
