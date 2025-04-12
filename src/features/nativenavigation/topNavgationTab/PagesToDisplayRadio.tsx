import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateTopNavigatePagesToDisplay } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";

export default function PagesToDisplayRadio() {
    const dispatch = useAppDispatch();
    const topNavigate = useAppSelector(
        (state: RootState) => state.apps.navigation.topNavigationBar.top_navigate_bar_visual_editor
    );

    const initialValue = useMemo(() => {
        return topNavigate.pages_to_display_top_nav_bar || "multiple pages";
    }, [topNavigate]);

    const [pagesToDisplay, setPagesToDisplay] = useState(initialValue);

    useEffect(() => {
        setPagesToDisplay(initialValue);
    }, [initialValue]);

    const handleChangePagesToDisplay = (value: string) => {
        setPagesToDisplay(value);

        dispatch(updateTopNavigatePagesToDisplay(value));
    };

    return (
        <>
            <Label className="font-normal my-5 block">Pages to Display Top Nav Bar</Label>
            <RadioGroup
                value={pagesToDisplay}
                onValueChange={handleChangePagesToDisplay}
                className="flex justify-between items-center p-1 rounded-md border border-primary20"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single page" id="r1" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r1">
                        Single Page
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple pages" id="r2" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r2">
                        Multiple Pages
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all pages" id="r3" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                        All Pages
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="r3" />
                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">
                        Custom
                    </Label>
                </div>
            </RadioGroup>
        </>
    );
}
