import { FaFeather } from "react-icons/fa";
import { useCallback } from "react";
import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);
    
    return (
        <div onClick={onClick}>
            <div 
                className="
                    mt-6
                    lg:hidden
                    rounded-full
                    h-14
                    w-14
                    justify-center
                    items-center
                    p-4
                    bg-sky-500
                    hover:bg-opacity-80
                    cursor-pointer
                    transition
                    "
            >
                <FaFeather size={24} color="white" />
            </div>
            <div
                className="
                    hidden
                    lg:block
                    rounded-full
                    mt-6
                    px-4
                    py-2
                    bg-sky-500
                    hover:bg-opacity-90
                    cursor-pointer
                    transition
                    "
            >
                <p 
                    className="
                        text-white
                        text-[20px]
                        font-semibold
                        lg:block
                        hidden
                        text-center
                        "
                >
                    Tweet
                </p>
            </div>
        
        </div>
    )
}

export default SidebarTweetButton