import { useState } from 'react'
import { useAuthContext } from '../src/context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {

    const [loading, setLoading] = useState(false);
    
    const { setAuthUser } = useAuthContext();
    
    const logout = async () => {

        setLoading(true);

        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // this is used to send the cookies along with the request
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            } else {
                localStorage.removeItem('chat-user');
                setAuthUser(null);
            }
        } catch (error) {
            console.log('Error in logout controller : ', error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading };
}

export default useLogout