import React from 'react'

const ProfileNav = ({setNav, nav}) => {
  return (
    <div className='pnav-container'>
        <ul className='pnav-wrapper'>
            <li className={nav === "edit" ? "pnav-link selected" : "pnav-link"} onClick={() => setNav("edit")}>Profili Düzenle</li>
            <li className={nav === "tickets" ? "pnav-link selected" : "pnav-link"} onClick={() => setNav("tickets")}>Biletlerim</li>
            <li className={nav === "notifications" ? "pnav-link selected" : "pnav-link"} onClick={() => setNav("notifications")}>Bildirimler</li>
        </ul>
    </div>
  )
}

export default ProfileNav