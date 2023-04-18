import { useCallback, useState } from 'react';
import useLoginModal  from '../../hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) return;

        registerModal.onClose();
        loginModal.onOpen();
    }, [isLoading, loginModal, registerModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await axios.post('/api/register', {
                email,
                password,
                name,
                username,
            });

            toast.success('Account created successfully');

            signIn('credentials', {
                email,
                password,
            });

            registerModal.onClose();
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [registerModal, email, password, name, username]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />
            <Input
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
            />
            <Input
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                Already have an account?{' '}
                <span
                    className='text-white cursor-pointer hover:underline'
                    onClick={onToggle}
                >
                    Log in
                </span>
            </p>
        </div>
    );
    
    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            title='Create an account'
            body={bodyContent}
            disabled={isLoading}
            onSubmit={onSubmit}
            actionLabel='Sign up'
            footer={footerContent}
        />
    )
}

export default RegisterModal