import React from 'react'
import { Link } from "react-router-dom"

function Links() {
    return (
        <>
            <Link exact to="/dashboard">
                <div className="flex-content nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="radix-icons:dashboard" data-inline="false"></span></div>
                    <div className="nav-name">Dashboard</div>
                </div>
            </Link>
            <Link exact to="/">
                <div className="flex-content nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="la:file-invoice" data-inline="false"></span></div>
                    <div className="nav-name">Invoice</div>
                </div>
            </Link>
            <Link exact to="/">
                <div className="flex-content nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="radix-icons:dashboard" data-inline="false"></span></div>
                    <div className="nav-name">Management</div>
                </div>
            </Link>
            <Link exact to="/login">
                <div className="flex-content nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="radix-icons:dashboard" data-inline="false"></span></div>
                    <div className="nav-name">Security</div>
                </div>
            </Link>
            <Link exact to="/">
                <div className="flex-content nav-card dashboard-bacground">
                    <div><span className="iconify nav-icon" data-icon="radix-icons:dashboard" data-inline="false"></span></div>
                    <div className="nav-name">Support</div>
                </div>
            </Link>
        </>
    )
}

export default Links
