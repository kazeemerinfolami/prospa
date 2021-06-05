import React from 'react'
import Nav from './Nav'
import TopNav from './TopNav'

function BodyFrame({ children, account, sideNav_background_color, sign, backIcon }) {
    return (
        <div className="Container-body">
            <Nav sideNav_background_color={sideNav_background_color} />
            <div className="Container-Body-Content-wrapper">
                <TopNav account={account} sign={sign} backIcon={backIcon} />
                <div className="children-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BodyFrame
