import React, { useState } from 'react'
import ProfileIMG from "../../../assets/Images/e4bbd3d6b48da2d7688840a0416cf62e5baaad90.png"
import Links from './Links'


function SideNav({ CloseMenu, open }) {
    const [openDropDown, setOpenDropDown] = useState(false)

    console.log(openDropDown)
    const HandleDropdown = () => {
        setOpenDropDown(true)
    }
    const HandleDropdownClose = () => {
        setOpenDropDown(!true)
    }
    return (
        <div className={open ? "Dashboard--sideNav-wrapper open-nav nav-body-con" : "Dashboard--sideNav-wrapper close-nav"}>
            <div className="flex-content Dashboard--sideNav-profile-wrapper">
                <div className="flex-content">
                    <div><div><img className="profile-pic" src={ProfileIMG} alt="profile-pic" /></div></div>
                    <div className="profile-margin">
                        <div className="bold-text Dashboard--sideNav-profile-name">Clayvan Inc</div>
                        <div className="Dashboard--sideNav-profile-position">Manage Account</div>
                    </div>
                </div>

                <div className="flex-content">
                    <div className="Dashboard--sideNav-drop-icon profile-margin" onMouseEnter={HandleDropdown} onMouseLeave={HandleDropdownClose}>
                        <span className="iconify" data-icon="akar-icons:chevron-down" data-inline="false"></span>
                    </div>
                    <div className="Dashboard--sideNav-close-icon" onClick={CloseMenu}>
                        <span className="iconify" data-icon="carbon:close" data-inline="false"></span>
                    </div>
                </div>
            </div>
            <div onMouseEnter={HandleDropdown} onMouseLeave={HandleDropdownClose} className="dropDown-wrapper">
                {
                    openDropDown &&
                    (<div className="dropDown-content-wrapper">
                        <div className="dropDown-content-name">Clayvan Inc</div>
                        <div className="dropDown-content-business">Business name2</div>
                        <div className="dropDown-content-business">Business name3</div>
                        <div className="dropDown-content-add">Add a business</div>
                    </div>)
                }
            </div>
            <Links />
            <div className="Dashboard--SideNav-footer">prospa</div>
        </div>
    )
}

export default SideNav
