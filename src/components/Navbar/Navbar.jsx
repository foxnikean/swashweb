import React, { useState } from "react";
//css
import "./Navbar.scss";
//assets
import logo from "../../assets/logo.svg"
import profilePic from "../../assets/profilePic.png";
import { BiBookContent, BiCategory, BiFoodMenu, BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuthentication from "../../utils/useAuthHook";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Navbar = () => {
  const {user} = useAuthentication()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Signed Out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navItems = [
    { icon: <BiHomeAlt />, label: "Anasayfa", path: "/" },
    { icon: <BiBookContent />, label: "İletişim", path: "/contact" },
    { icon: <BiCategory/>, label: "Etkinlikler", path: "/events" },
    { icon: <BiFoodMenu/>, label: "Yardım", path: "/help" },
  ];
  return (
    <div className='container'>
      <nav className='nav'>
        <img onClick={handleLogout} src={logo} alt='' />
        <ul className='navList'>
          {navItems.map((item, i) => (
            <Link key={i} className='navLink' to={item.path}>
              <span className="icon">{item.icon}</span> <span>{item.label}</span>{" "}
            </Link>
          ))}
          <Link to="/register" className="userLink"><img src={user ? "user-pic" : profilePic} alt="profilePic" /> <span>{user ? "username" : "Kayıt Ol"}</span></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
