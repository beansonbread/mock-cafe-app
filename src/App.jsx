import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/cart" Component={Cart} /> 
      </Routes>
    </>
  )
}

export default App;
