import { createContext, useContext, useState } from "react";

// A context is used to share data between components without having to pass the data down through props
export const AuthContext = createContext(); // this is the context that will be used to provide the user data to all the components

 export const useAuthContext = () => {
     return useContext(AuthContext); // useContext is used to access the context that is provided by the AuthContext.Provider
 } 

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user ")) || null); // this is the state that will store the user data
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
    // this is the provider component that will wrap the entire application and provide the context to all the components
};
 