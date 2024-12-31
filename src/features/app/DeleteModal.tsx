import Modal from "@/components/Modal"


interface DeleteModalProps {
    showDeleteModal : boolean
    closeDeleteModal: () => void;
}
const DeleteModal = ({showDeleteModal, closeDeleteModal}: DeleteModalProps) => {
  return (
    <Modal heading="Delete App" isOpen={showDeleteModal} closeModal={closeDeleteModal} btn1Click={closeDeleteModal} btn1="Cancel" btn2="Delete" btn1style="bg-primary5" btn2style="bg-pink1 text-red1">
          <p>Are you sure you want to delete savebills from this
          organization?</p>
      </Modal>
  )
}

export default DeleteModal