import React from 'react'
import { Link } from "react-router-dom"

function Form() {
    return (
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
    )
}

export default Form
