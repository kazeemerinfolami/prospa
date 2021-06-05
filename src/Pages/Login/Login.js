import React from 'react'
import { Link } from "react-router-dom"
import BodyFrame from '../../component/BodyFrame'

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
                <form className="form">
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " />
                        <label for="" className="from__label">Email address</label>
                    </div>
                    <div className="form__div">
                        <input type="email" className="form__input" placeholder=" " />
                        <label for="" className="from__label">Password</label>
                    </div>
                    <Link exact to="/dashboard"><button className="next-button">next</button></Link>
                </form>
            </div>
        </BodyFrame>
    )
}

export default Login
