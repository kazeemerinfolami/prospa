import React from 'react'
import { Link } from "react-router-dom"
import BodyFrame from '../../component/BodyFrame'

function Signup() {
    return (
        <BodyFrame
            backIcon=""
            sign={<Link exact to="/login">Sign In</Link>}
            account="Already a member"
            sideNav_background_color="Container-Nav-Wrapper sideNav-Boacground-color"
        >
            <div className="Form-container">
                <div className="flex-center bold-text mini-logo">Prospa</div>
                <div className="bold-text content-title">Create your account</div>
                <div className="content-title-sub">A short description about account types </div>
                <Link exact to="/pick-Business-type">next</Link>
            </div>
        </BodyFrame>
    )
}

export default Signup
