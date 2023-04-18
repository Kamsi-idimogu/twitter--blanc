import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
    label: string;
    showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackButton }) => {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
        }, [router]);
    
    return (
        <div className='p-5 border-b-[1px] border-neutral-800'>
            <div className='flex flex-row items-center gap-2'>
                {showBackButton && (
                    <BiArrowBack
                        className='transition hover:opacity-70 cursor-pointer'
                        onClick={handleBack}
                        color="white"
                        size={20}
                    />
                )}
                <h1 className='text-white text-xl font-semibold'>{label}</h1>
            </div>
        </div>
    )
}

export default Header