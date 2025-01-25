import { useState } from "react";
import toast from "react-hot-toast";

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
        
        if (!success) return;

        setLoading(true);// setLoading is used to show the loading spinner when the user clicks the signup button
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender }), //converts the object to a JSON string
            });
            const data = await res.json(); // we got a CORS error because we are trying to access the API from a different origin so we need to add a proxy to the vite.config.js file not the package.json file because we are using vite not create-react-app
            // we need to fix this only in client side not in the server side so that we can access the API from the client side only
            console.log(data);
            if(data.error) {
                throw new Error(data.error); // thrown new Error() will make the catch block run
            }
        } catch (error) {
            console.log("Error in signup controller : ",error.message);
            toast.error(error.message);
        } finally {
            setLoading(false); // here setLoading is set to false to hide the loading spinner
        }
    }

    function handleInputErrors({ fullname, username, password, confirmPassword, gender}) {
        if (!fullname || !username || !password || !confirmPassword || !gender) {
            toast.error("All fields are required");
            // return { error: "All fields are required" };
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match");
            // return { error: "Password and Confirm Password do not match" };
            return false;
        }

        if(password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            // return { error: "Password must be at least 6 characters long" };
            return false;
        }
        return true;
    }
    return { signup, loading };
}