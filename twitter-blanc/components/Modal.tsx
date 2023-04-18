import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit: OnSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
}) => {
    const handleClose = useCallback(() => {
        if(disabled) return;

        onClose();
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if(disabled) return;

        OnSubmit();
    }, [disabled, OnSubmit]);

    if(!isOpen) {
        return null;
    }

    return (
        <>
            <div className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-neutral-800
                bg-opacity-70
                overflow-y-auto
                overflow-x-hidden
                outline-none
                focus:outline-none
                ">
                    <div className="
                        relative
                        w-full
                        mx-auto
                        my-6
                        lg:w-3/6
                        lg:mx-w-3xl
                        h-full
                        lg:h-auto
                        ">
                            {/* Modal Content */}
                            <div className="
                                h-full
                                lg:h-auto
                                relative
                                flex
                                flex-col
                                w-full
                                bg-black
                                outline-none
                                focus:outline-none
                                rounded-lg
                                shadow-lg
                                border-0
                                ">
                                    {/* Modal Header */}
                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                        p-10
                                        rounded-t
                                        ">
                                            <h3 className="
                                                text-3xl
                                                font-semibold
                                                text-white
                                                ">
                                                    {title}
                                            </h3>
                                            <button
                                                onClick={handleClose}
                                                className="
                                                    p-1
                                                    ml-auto
                                                    border-0
                                                    text-white
                                                    transition
                                                    hover:opacity-70
                                                    ">
                                                        <AiOutlineClose size={20}/>
                                            </button>
                                    </div>

                                    {/* Modal Body */}
                                    <div className="
                                        relative
                                        p-10
                                        flex-auto
                                        ">
                                            {body}
                                    </div>

                                    {/* Modal Footer */}
                                    <div className="
                                        flex
                                        flex-col
                                        gap-2
                                        p-10
                                        ">
                                            <Button 
                                                onClick={handleSubmit} 
                                                disabled={disabled} 
                                                label={actionLabel} 
                                                secondary
                                                fullWidth
                                                large
                                            />
                                            {footer}
                                    </div>
                            </div>
                    </div>

                </div>
        </>
    );}

export default Modal
    