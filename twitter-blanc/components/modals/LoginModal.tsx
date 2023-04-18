import { useCallback, useState } from 'react';
import useLoginModal  from '../../hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';
import { signIn } from 'next-auth/react';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) return;

        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, loginModal, registerModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await signIn ('credentials', {
                email,
                password,
            });

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal, email, password]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />
            <Input
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />
        </div>
    );

    const footerContent = (
        <div className='text-center mt-4 text-neutral-400'>
            <p className='text-gray-500'>
                First time using Twitter?
                <span
                    className='text-white cursor-pointer hover:underline'
                    onClick={onToggle}
                >
                    Create an account
                </span>
            </p>
        </div>
    );
    
    return (
        <Modal
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            title='Login'
            body={bodyContent}
            disabled={isLoading}
            onSubmit={onSubmit}
            actionLabel='Sign in'
            footer={footerContent}
        />
    )
}

export default LoginModal