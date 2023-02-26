import "./App.scss";
import Login from "./components/BasicForms/Login";
import Register from "./components/BasicForms/Register";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import AddProfilePic from "./components/BasicForms/AddProfilePic";
import { Route, Routes } from "react-router-dom";
//Redux
import store from "./stores/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Routes className='routes'>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addpic' element={<AddProfilePic />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
