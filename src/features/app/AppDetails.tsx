import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppInfo from "./AppInfo";
import ActionButton from "./ActionButton";
import AppMetaData from "./AppMetaData";
import DeleteModal from "./DeleteModal";

interface AppItem {
    logo: string;
    title: string;
    plan: string;
    ios: string;
    android: string;
    user: string;
    members: number;
    lastSaved: string;
  };
  
  type Props = {
    item: AppItem;
  };
  
  
  export const AppDetails = ({ item }: Props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
  
    const navigate = useNavigate();
  
  
    const openDeleteModal = () => {
      setShowDeleteModal(true)
    }
    const closeDeleteModal = () => {
      setShowDeleteModal(false)
    }
  
    return (
      <div className="bg-deepgray py-4 px-7 rounded-[11px]">
        <AppHeader logo={item.logo} title={item.title} />
        <div className="mt-3 flex items-center justify-between lg:flex-row md:flex-row sm:flex-col sm:gap-4 ">
          <AppInfo plan={item.plan} ios={item.ios} android={item.android}/>
          <ActionButton onViewClick={() => navigate("/app/editApp")} onEditClick={() => navigate("/app/edit/overview")} onDeleteClick={openDeleteModal} />
        </div>
        <AppMetaData user={item.user} members={item.members} lastSaved={item.lastSaved} />
  
        {/* Delete App Modal */}
        <DeleteModal showDeleteModal={showDeleteModal} closeDeleteModal={closeDeleteModal}/>
      </div>
    );
  };
  