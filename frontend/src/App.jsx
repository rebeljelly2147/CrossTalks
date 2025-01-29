import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home/home";
import { Login } from "./Pages/login/login";
import { SignUp } from "./Pages/signup/signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster />
      <Routes>

        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to= {"/login"} />}
        />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />

        {" "}
        {/* if the user is already logged in then the user should not be able to access the signup page so we use the Navigate component to redirect the user to the home page */}
      </Routes>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
