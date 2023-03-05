import React, { useState } from "react";
import "./Profile.scss";
import ProfileNav from "./components/ProfileNav";
import ProfileEdit from "./components/ProfileEdit";
import ProfileTickets from "./components/ProfileTickets";
const Profile = () => {
  const [nav, setNav] = useState("edit");
  return (
    <div className='profile-container'>
      <ProfileNav setNav={setNav} nav={nav} />
      <div className='profile-header'>
        <span>{nav === "edit" ? "Profili Düzenle" : "Biletlerim"}</span>
      </div>
      {nav === "edit" ? <ProfileEdit/> : <ProfileTickets/>}
    </div>
  );
};

export default Profile;
