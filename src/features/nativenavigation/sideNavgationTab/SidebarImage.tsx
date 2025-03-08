import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateSideNavImage } from "@/redux/app/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

interface IRadio {
    title: string;
    label: string;
}

interface ISidebarImage {
    title: string;
    radios: IRadio[];
}

type TSidebarType = "text" | "image";

export default function SidebarImage({ title, radios }: ISidebarImage) {
    const dispatch = useAppDispatch();

    const sidebarImageType = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebar_navigation
    );

    const initialvalue = sidebarImageType.styling.image as TSidebarType;

    const [sidebarType, setSideBarType] = useState<TSidebarType>(initialvalue);

    useEffect(() => {
        setSideBarType(initialvalue);
    }, [initialvalue]);

    const handleChangeSideBarType = (value: TSidebarType) => {
        setSideBarType(value);
        dispatch(updateSideNavImage(value));
    };

    return (
        <div className="w-[45%]">
            <Label className="text-xs font-normal mb-2 block">{title}</Label>
            <RadioGroup
                className="flex justify-between border border-primary20 p-[0.3rem] rounded-md"
                value={sidebarType}
                onValueChange={handleChangeSideBarType}
            >
                {radios.map((radio, index) => {
                    const { title, label } = radio;
                    return (
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem value={label.toLowerCase()} id="r1" />
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
