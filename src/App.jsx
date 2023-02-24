
import './App.scss'
import Login from './components/BasicForms/Login'
import Register from './components/BasicForms/Register'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Navbar/>
      <Routes className="routes">
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
