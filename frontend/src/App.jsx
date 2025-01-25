import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home/home'
import { Login } from './Pages/login/login'
import { SignUp } from './Pages/signup/signup'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App
