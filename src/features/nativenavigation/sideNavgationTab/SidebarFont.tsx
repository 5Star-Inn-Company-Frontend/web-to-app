import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateSideNavFont } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

type TSideBarFont = "light" | "dark" | "system";

export default function SidebarFont() {
    const dispatch = useAppDispatch();
    const sideBarFont = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebar_navigation.styling
    );

    const initialValue = sideBarFont.sidebar_font as TSideBarFont;
    const [selected, setSelected] = useState<TSideBarFont>(initialValue);

    useEffect(() => {
        setSelected(sideBarFont.sidebar_font as TSideBarFont);
    }, [sideBarFont]);

    const handleSelected = (value: TSideBarFont) => {
        setSelected(value);
        dispatch(updateSideNavFont(value));
    };
    return (
        <div className="w-[45%]">
            <Label className="text-xs font-normal mb-2 block">Sidebar Font</Label>
            <Select value={selected} onValueChange={handleSelected}>
                <SelectTrigger className="h-8">
                    <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
