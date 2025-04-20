import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

interface ICustomConfigCard {
    title: string;
    onClick?: () => void;
}
export const CustomConfigCard = ({ title, onClick }: ICustomConfigCard) => {
    return (
        <div className="p-4 rounded-md">
            <div>
                <Button
                    onClick={onClick}
                    className="flex items-center gap-2 bg-white font-normal  text-black m-auto hover:text-white"
                >
                    <AiOutlinePlus size="1.4rem" />
                    {title}
                </Button>
            </div>
        </div>
    );
};
