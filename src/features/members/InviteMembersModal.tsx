import Modal from "@/components/Modal"


interface InviteMembersModalProps {
    openModal: boolean;
    closeModal: () => void;
}

const InviteMembersModal = ({openModal, closeModal}: InviteMembersModalProps) => {
  return (
    <Modal heading="Invite a New member to Emmy’s Team"
        isOpen={openModal}
        closeModal={closeModal}
        btn1="Cancel"
        btn2="Send Invite"
        btn1style="bg-primary90"
        btn2style="bg-primary100 text-white"
        btn1Click={closeModal}
      >
        <div>
          <div className="flex justify-between gap-x-8 mb-5">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name" className="font-medium">Name</label>
              <input type="text" className="border border-primary40 rounded-md py-2 px-3 w-full" placeholder="New Member's Name" />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name">Email</label>
              <input type="text" className="border border-primary40 rounded-md w-full py-2 px-3" placeholder="Email Address" />
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-4 font-medium">Organization Role</h3>
            <div className="inline-flex py-[5px] px-2 gap-x-8 border border-primary40 rounded-lg">
              <div className="flex items-center gap-x-1">
                <input type="radio" name="role" id="owner" className="block" />
                <label htmlFor="owner" className="block">Owner</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="radio" name="role" id="collaborator" />
                <label htmlFor="collaborator">Collaborator</label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-3 font-medium">App Access</h3>
            <div className="flex justify-between items-center border rounded-lg py-4 px-5">
              <div className="flex items-center gap-x-4">
                <img src="/giftcard.png" alt="" />
                <h4>Giftbills</h4>
              </div>
              <div className="flex items-center gap-x-7">
                <div className="flex items-center gap-x-1">
                  <p className="text-xs">Admin</p>
                  <img src="/arrowdown.svg" alt="" />
                </div>
                <img src="/cancel.svg" alt="" className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default InviteMembersModal