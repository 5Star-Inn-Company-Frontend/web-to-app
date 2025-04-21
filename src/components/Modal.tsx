import { ReactElement } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactElement;
    heading: string;
    isOpen: boolean;
    closeModal: () => void;
    btn1style: string;
    btn2style: string;
    btn1?: string;
    btn2?: string;
    btnIcon?: string;
    btn1Click?: () => void;
    btn2Click?: () => void;
    width?: string;
}

const Modal = ({
    children,
    width,
    isOpen,
    closeModal,
    heading,
    btn1style,
    btn2style,
    btn1,
    btn2,
    btnIcon,
    btn1Click,
    btn2Click,
}: ModalProps) => {
    if (!isOpen) return null;
    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <div className={`bg-white rounded-lg  relative ${width}`}>
                <div className="flex justify-between items-center bg-primary70 p-4 rounded-t-lg">
                    <h2 className="font-medium text-xl">{heading}</h2>
                    <button
                        className=" text-gray-500 hover:text-gray-800 text-4xl"
                        onClick={closeModal}
                    >
                        <img src="/cancel.svg" alt="" />
                    </button>
                </div>
                <div className="modal-content mt-6 p-5">{children}</div>

                <div className="border border-primary90 flex items-center gap-x-4 justify-end p-4">
                    <button
                        onClick={btn1Click}
                        className={`flex items-center py-2 px-8 cursor-pointer rounded-lg ${btn1style}`}
                    >
                        {btnIcon && <img src={btnIcon} alt="btn icon" />}
                        {btn1}
                    </button>
                    <button
                        onClick={btn2Click}
                        className={`py-2 px-8 rounded-lg cursor-pointer ${btn2style}`}
                    >
                        {btn2}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
