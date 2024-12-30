import Modal from "@/components/Modal";
import { useState } from "react";

const ChangePassword = () => {
    const [backDrop, setBackDrop] = useState(false)

    const handleBackdropClose = () => {
        setBackDrop(false);
    };
    const handleBackdropOpen = () => {
        setBackDrop(true);
    };

    return (
        <>
            <div className="mb-14">
                <h3 className="mb-2">Password</h3>
                <button className="bg-primary100 px-3 py-2 gap-x-4 rounded-md text-white flex items-center" onClick={handleBackdropOpen}>
                    <img src="/padlock.svg" alt="" />
                    Change Password
                </button>
            </div>

            {/* Change Password Backdrop */}
            <Modal width="50%" heading="Change Password" isOpen={backDrop} closeModal={handleBackdropClose} btn1="Cancel" btn2="Change Password" btn1style="bg-deepgray" btn2style="bg-primary100 text-white">
                <form>
                    <div className="center">
                        <Input label="Current Password" />
                        <Input label="New Password"/>
                        <Input label="Confirm New Password"/>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ChangePassword


const Input = ({ label }: { label: string }) => {
    return (<div className="flex flex-col mb-4">
        <label htmlFor="psw" className="mb-3">{label}</label>
        <input type="password" name="psw" placeholder="***************" className="border px-4 py-2 rounded-lg w-[400px]" />
    </div>)
}