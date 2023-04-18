interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline,
}) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition
                rounded-full
                font-semibold
                hover:opacity-80
                border
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'text-black' : 'text-white'}
                ${secondary ? 'bg-white' : 'bg-sky-500'}
                ${secondary ? 'border-black' : 'border-sky-500'}
                ${large ? 'py-3 px-5 text-xl' : 'py-2 px-4 text-md'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'text-white' : ''}
                ${outline ? 'border-white' : ''}
            `}
        >
            {label}
        </button>
    )
}

export default Button