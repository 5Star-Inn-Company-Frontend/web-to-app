import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateSideNavStylingIos } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

type TSideBarFont = "Default" | "Light" | "Dark" | "System";

export default function SidebarFont() {
    const dispatch = useAppDispatch();
    const sideNavStylingIos = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.styling.ios
    );

    const sidebarFont = sideNavStylingIos.sidebarFont as TSideBarFont;

    const handleSelected = (value: TSideBarFont) => {
        dispatch(updateSideNavStylingIos({ ...sideNavStylingIos, sidebarFont: value }));
    };
    return (
        <div className="w-[45%]">
            <Label className="text-xs font-normal mb-2 block">Sidebar Font</Label>
            <Select value={sidebarFont} onValueChange={handleSelected}>
                <SelectTrigger className="h-8">
                    <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Light">Light</SelectItem>
                    <SelectItem value="Dark">Dark</SelectItem>
                    <SelectItem value="System">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
