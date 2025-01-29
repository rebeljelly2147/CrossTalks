import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../src/context/AuthContext';

export const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const login = async ({
        username,
        password }) => {
        const success = handleInputErrors({
            username,
            password,
        });

        if (!success) return;

        setLoading(true);
        // setLoading is used to show the loading spinner when the user clicks the login button
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password,
                }), //converts the object to a JSON string
            });

            const data = await res.json();
            // we got a CORS error because we are trying to access the API from a different origin so we need to add a proxy to the vite.config.js file not the package.json file because we are using vite not create-react-app
            // we need to fix this only in client side not in the server side so that we can access the API from the client side only

            // if(data.error) {
            //     toast.error(data.error); // thrown new Error() will make the catch block run
            // }

            console.log(data);

            // localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));// this will store the user data in the localstorage of the browser so that the user remains logged in even after the page is refreshed

            // toast.success("User signed up successfully");

            // context
            setAuthUser(data); // this will set the user data in the context so that the user remains logged in even after the page is refreshed

        } catch (error) {
            console.log("Error in login controller : ", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false); // here setLoading is set to false to hide the loading spinner
        }
    }
    function handleInputErrors({username,password }){
        if (!username || !password) {
            toast.error("All fields are required");
            // return { error: "All fields are required" };
            return false;
        }
        // if (password !== confirmPassword) {
        //     toast.error("Password and Confirm Password do not match");
        //     // return { error: "Password and Confirm Password do not match" };
        //     return false;
        // }

        // if (password.length < 6) {
        //     toast.error("Password must be at least 6 characters long");
        //     // return { error: "Password must be at least 6 characters long" };
        //     return false;
        // }
        return true;
    }
    return { login, loading };
}
