import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }
  return true;
};

export const useLogin = () => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password });

    if (!success) return;

    setLoading(true);
    // setLoading is used to show the loading spinner when the user clicks the login button
    try {
      // await delay(2000); // this is used to delay the execution of the code by 2 seconds so that we can see the loading spinner

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // this is used to tell the server that the data we are sending is in JSON format
        },
        credentials: "include", // this is used to send the cookies along with the request
        body: JSON.stringify({
          username,
          password,
        }), //converts the object to a JSON string
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error); // thrown new Error() will make the catch block run
      }

      // console.log(data); // else login Id and password will be displayed in the console LOL 😉

      // localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // this will store the user data in the localstorage of the browser so that the user remains logged in even after the page is refreshed

      toast.success("Welcome back 😇!");

      // context
      setAuthUser(data); // this will set the user data in the context so that the user remains logged in even after the page is refreshed
    } catch (error) {
      console.log("Error in useLogin/Hooks : ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false); // here setLoading is set to false to hide the loading spinner
    }
  };

  return { login, loading };
};
