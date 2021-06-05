import React, { useState } from 'react'
import SideNav from './SideNav'

import TopBar from './TopBar'

function DashboardFrame({ children, pageName }) {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(true)
    }
    const CloseMenu = () => {
        setOpen(!true)
    }
    return (
        <div className="Dashboard--wrapper">
            <SideNav open={open} CloseMenu={CloseMenu} />
            <div className="Dashboard--content-wrapper">
                <TopBar pageName={pageName} openMenu={openMenu} open={open} />
                <div className="Dashboard--content-container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardFrame
