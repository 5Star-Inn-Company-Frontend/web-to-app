import { Input } from "@/components/ui/input";
import {
    SelectContent,
    Select,
    SelectTrigger,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { updateLinkBehaviour } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
export const RestoreDefaultActionList = () => {
    const dispatch = useAppDispatch();
    const links = useAppSelector(
        (state: RootState) => state.apps.linkHandling.internalVsExternalLinks.items
    );

    const handleModeChange = (value: string, label: string) => {
        const updateMode = links.map((link) => {
            if (link.label.toLowerCase() === label.toLowerCase()) {
                return { ...link, mode: value };
            }
            return link;
        });
        dispatch(updateLinkBehaviour(updateMode));
    };

    return (
        <div className="flex flex-col gap-0">
            {links.map((link) => {
                return (
                    <LinkHandlingCard
                        key={link.label}
                        onValueChange={handleModeChange}
                        label={link.label}
                        value={link.mode}
                    />
                );
            })}
        </div>
    );
};

const modeDropdown = [
    { label: "App Browser", value: "appbrowser" },
    { label: "Internal", value: "internal" },
    { label: "External", value: "external" },
];

interface ILinkhandlingCard {
    value: string;
    label: string;
    onValueChange: (value: string, label: string) => void;
}

const LinkHandlingCard = ({ label, value, onValueChange }: ILinkhandlingCard) => {
    return (
        <div className="p-3 first:rounded-t-lg last:rounded-b-lg border border-primary20 last:border-b  border-b-0 ">
            <div className=" rounded-md p-2 border border-primary20">
                <div className="py-2 px-2 xl:py-1 bg-deepgray  flex flex-col xl:flex-row gap-4 flex-rap items-center rounded-md">
                    <div className="flex flex-col xl:flex-row gap-4 items-center flex-grow">
                        <img src="/drag.svg" alt="" />
                        <Input
                            type="text"
                            className="border border-primary60 bg-deepgray px-2"
                            defaultValue={label}
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Select
                            value={value}
                            onValueChange={(value: string) => onValueChange(value, label)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {modeDropdown.map((mode) => {
                                    return (
                                        <SelectItem key={mode.value} value={mode.value}>
                                            {mode.label}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                        <AiOutlineEdit size="1.4rem" />
                        <AiOutlineDelete size="1.4rem" />
                    </div>
                </div>
            </div>
        </div>
    );
};
