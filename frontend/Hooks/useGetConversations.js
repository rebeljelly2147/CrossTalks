
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {

    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // this is used to send the cookies along with the request
                }); // fetch all users
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
                // else {
                //     setConversations(data)
                // }
            } catch (error) {
                console.log('Error in getConversations controller : ', error.message);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversations