import Popover from "@/components/Popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ActionButtonProps {
    onViewClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
    onShareClick: () => void;
}

const ActionButton = ({
    onViewClick,
    onEditClick,
    onDeleteClick,
    onShareClick,
}: ActionButtonProps) => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const popoverLinks = [
        { imgUrl: "/share.svg", label: "Public Sharing Link", handleClick: onShareClick },
        { imgUrl: "/clone.svg", label: "Clone to New App" },
        { imgUrl: "/access.svg", label: "Manage App Access" },
        { imgUrl: "/delete.svg", label: "Delete App", handleClick: onDeleteClick },
    ];
    return (
        <div className="flex items-center gap-x-5">
            <Button variant="outline" className="" onClick={onViewClick}>
                View
            </Button>
            <Button className="bg-[#000000]" onClick={onEditClick}>
                Edit
            </Button>
            <Popover
                popoverItem={popoverLinks}
                showPopover={showMore}
                toggleShowPopover={toggleShowMore}
            />
        </div>
    );
};

export default ActionButton;
