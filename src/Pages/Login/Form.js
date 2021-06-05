import React from 'react'
import { Link } from "react-router-dom"

function Form() {
    return (
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
    )
}

export default Form
