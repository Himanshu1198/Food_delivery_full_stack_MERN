import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import { CartProvider } from './components/CartProvider'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<SignUp />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
