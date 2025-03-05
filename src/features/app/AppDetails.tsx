import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppInfo from "./AppInfo";
import ActionButton from "./ActionButton";
import AppMetaData from "./AppMetaData";
import DeleteModal from "./DeleteModal";
import { IAppData } from "@/types/type";

export const AppDetails = ({ name, id, member_count, last_saved }: IAppData) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const navigate = useNavigate();

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };
    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div className="bg-deepgray py-4 px-7 rounded-[11px]">
            <AppHeader logo="/giftcard.png" title={name} />
            <div className="mt-3 flex items-center justify-between lg:flex-row md:flex-row sm:flex-col sm:gap-4 ">
                <AppInfo plan="Free" ios="co.5start.ios.qlije" android="co.5start.android.qlije" />
                <ActionButton
                    onViewClick={() => navigate("/app/viewapp")}
                    onEditClick={() => navigate(`/app/${id}/overview`)}
                    onDeleteClick={openDeleteModal}
                />
            </div>
            <AppMetaData user="Admin" members={member_count} lastSaved={last_saved} />

            {/* Delete App Modal */}
            <DeleteModal showDeleteModal={showDeleteModal} closeDeleteModal={closeDeleteModal} />
        </div>
    );
};
