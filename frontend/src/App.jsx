import './App.css'
import { Home } from './Pages/home/home'
import { Login } from './Pages/login/login'
import { SignUp } from './Pages/signup/signup'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
