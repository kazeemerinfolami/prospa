import React from 'react'
import { Link } from "react-router-dom"
import BodyFrame from '../../component/BodyFrame'
import Form from './Form'

function Signup() {
    return (
        <BodyFrame
            backIcon=""
            sign={<Link exact to="/login">Sign In</Link>}
            account="Already a member"
            sideNav_background_color="Container-Nav-Wrapper sideNav-Boacground-color"
        >
            <div className="Form-container">
                <div className="flex-center bold-text mini-logo">prospa</div>
                <div className="bold-text content-title">Create your account</div>
                <div className="content-title-sub">A short description about account types </div>
                <Form />
            </div>
        </BodyFrame>
    )
}

export default Signup
