import React from 'react'
import ProfileIMG from "../../../assets/Images/e4bbd3d6b48da2d7688840a0416cf62e5baaad90.png"

function TopBar({ pageName, openMenu }) {
    return (
        <div className="flex-justify-btw Dashboard--TopNav-wrapper">
            <div className="Page-Name">{pageName}</div>
            <div className="flex-content">
                <div className="Dashboard--TopNav-notification"><span className="iconify " data-icon="ic:baseline-notifications" data-inline="false"></span></div>
                <div><img className="profile-pic" src={ProfileIMG} alt="profile-pic" /></div>
                <div className="hambuger" onClick={openMenu}><span className="iconify" data-icon="subway:menu" data-inline="false"></span></div>
            </div>
        </div>
    )
}

export default TopBar
