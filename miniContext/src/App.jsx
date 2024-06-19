import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'

function App() {


  return (
    <UsercontextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
