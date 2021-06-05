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
                <form className="form">
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " />
                        <label for="" className="from__label">Firstname</label>
                    </div>
                    <div className="form__div">
                        <input type="email" className="form__input" placeholder=" " />
                        <label for="" className="from__label">Lastname</label>
                    </div>
                    <div className="form__div">
                        <input type="num" className="form__input" placeholder=" " />
                        <label for="" className="from__label">Email</label>
                    </div>
                    <Link exact to="/pick-Business-type"><button className="next-button">next</button></Link>
                </form>
            </div>
        </BodyFrame>
    )
}

export default Signup
