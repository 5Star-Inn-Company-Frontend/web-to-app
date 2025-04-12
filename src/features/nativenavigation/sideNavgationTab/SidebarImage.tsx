import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateSideNavStylingIos } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

type TSidebarType = "appIcon" | "newImage";

const radios = [
    { title: "App Icon", label: "appIcon" },
    { title: "New Image", label: "newImage" },
];

export default function SidebarImage() {
    const dispatch = useAppDispatch();

    const sidebarImageType = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.styling.ios
    );

    const imageType = sidebarImageType.type as TSidebarType;

    const handleChangeSideBarType = (value: TSidebarType) => {
        dispatch(updateSideNavStylingIos({ ...sidebarImageType, type: value }));
    };

    return (
        <div className="w-[45%]">
            <Label className="text-xs font-normal mb-2 block">Image</Label>
            <RadioGroup
                className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
                value={imageType}
                onValueChange={handleChangeSideBarType}
            >
                {radios.map((radio, index) => {
                    const { title, label } = radio;
                    return (
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem value={label} id="r1" />
                            <Label className="text-xs" htmlFor={label}>
                                {title}
                            </Label>
                        </div>
                    );
                })}
            </RadioGroup>
        </div>
    );
}
