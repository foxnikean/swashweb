import React, { useEffect, useState } from "react";
//css
import "./Navbar.scss";
//assets
import logo from "../../assets/logo.svg";
import profilePic from "../../assets/profilePic.png";
import {
  BiBookContent,
  BiCategory,
  BiFoodMenu,
  BiHomeAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from '../../stores/userSlice'
import useAuthentication from "../../utils/useAuthHook";

const Navbar = () => {
  const count = useSelector((state) => state.userData.data)
  const dispatch = useDispatch()
  const { user } = useAuthentication();
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
    { icon: <BiCategory />, label: "Etkinlikler", path: "/events" },
    { icon: <BiFoodMenu />, label: "Yardım", path: "/help" },
  ];

  useEffect(() => {
    dispatch(getUserAsync())
  }, [user]);
  return (
    <div className='nav-container '>
      <nav className='nav'>
        <img onClick={handleLogout} src={logo} alt='' />
        <ul className='nav-list'>
          {navItems.map((item, i) => (
            <Link key={i} className='nav-link' to={item.path}>
              <span className='icon'>{item.icon}</span>{" "}
              <span className="">{item.label}</span>{" "}
            </Link>
          ))}
          <Link to={user ? "/profile" : "/register"} className='user-link'>
            <img className="user-pic" src={user ? user.photoURL : "profile-pic"} alt='profilePic' />{" "}
            <span>{user ? user.displayName : "Kayıt Ol"}</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
