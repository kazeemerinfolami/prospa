import React from 'react'
import { Link } from "react-router-dom"
import BodyFrame from '../../component/BodyFrame'
import Form from './Form'

function Login() {
    return (
        <BodyFrame
            backIcon={<Link exact to="/pick-Business-type"><div className="back-icon-wrapper"><span className="iconify" data-icon="eva:arrow-ios-back-outline" data-inline="false"></span></div></Link>}
            sign={<Link exact to="/">Sign up</Link>}
            account="Don't have an account"
            sideNav_background_color="Container-Nav-Wrapper sideNav-Boacground-color2"
        >
            <div className="Form-container">
                <div className="flex-center bold-text mini-logo">Prospa</div>
                <div className="bold-text content-title">Welcome back to Prospa</div>
                <div className="content-title-sub">An account, with powerful, personalised tools all in one place </div>
                <Form />
            </div>
        </BodyFrame>
    )
}

export default Login
