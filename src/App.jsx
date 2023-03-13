import "./App.scss";
import Login from "./components/BasicForms/Login";
import Register from "./components/BasicForms/Register";
import Homepage from "./components/Homepage";
import AddProfilePic from "./components/BasicForms/AddProfilePic";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
//Redux
import store from "./stores/store";
import { Provider } from "react-redux";
import Contact from "./components/Contact";
import AddEvent from "./components/AddEvent";
import OrganisatorPage from "./components/OrganisatorPage";
import OrgRegister from "./components/BasicForms/OrgRegister";
import Footer from "./components/Footer";
import EventsPage from "./components/EventsPage";
import EventMain from "./components/EventMain";
import OrganisatorLand from "./components/OrganisatorLanding";
import useAuthentication from "./services/UseAuthHook";
function App() {
  const user = useAuthentication();
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        {user ? (
          <Routes className='routes'>
              <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/OrgRegister' element={<OrgRegister />} />
            <Route path='/addpic' element={<AddProfilePic />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/event/:id' element={<EventMain />} />
            <Route path='/org' element={<OrganisatorPage />} />

          </Routes>
        ) : (
          <Routes className='routes'>
           <Route path='/' element={<Homepage />} />
            <Route path='/addpic' element={<AddProfilePic />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/event/:id' element={<EventMain />} />
          </Routes>
        )}
      </Provider>
    </div>
  );
}

export default App;
