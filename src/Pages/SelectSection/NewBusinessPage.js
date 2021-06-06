import React, { useState } from 'react'
import { Link } from "react-router-dom"
import BodyFrame from '../../component/BodyFrame'

function NewBusinessPage() {

    const [openBox, setOpenBox] = useState("")
    const handleChange = (e) => {
        setOpenBox(e.target.value)
    }


    return (
        <BodyFrame
            backIcon={<Link exact to="/"><div className="back-icon-wrapper"><span className="iconify" data-icon="eva:arrow-ios-back-outline" data-inline="false"></span></div></Link>}
            sign={<Link exact to="/login">Sign In</Link>}
            account="Already a member"
            sideNav_background_color="Container-Nav-Wrapper sideNav-Boacground-color"
        >
            <div className="Form-container">
                <div className="flex-center bold-text mini-logo">Prospa</div>
                <div className="bold-text content-title">Open a new business account</div>
                <div className="content-title-sub">A short description comes here </div>
                <form>
                    <div>
                        <div className="NewBusinessPage-Card-wrapper">
                            <div className="flex-content mini-bottom-margin">
                                <div>
                                    <input type="radio" className="radio-input" id="Choice1"
                                        name="contact" value="1" onClick={handleChange} />
                                </div>
                                <div>
                                    <label for="Choice1" className="bold-text">
                                        I have a registered business/ charity with CAC
                                        </label>
                                </div>
                            </div>
                            {openBox == "1" ? (
                                <div>
                                    <div className="content-title-sub mini-bottom-margin" >As a registered business you will get</div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Account in your business name</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>send to and receive transfers from all Nigeria banks</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Tools for business management</div>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                        <div className="NewBusinessPage-Card-wrapper">
                            <div className="flex-content mini-bottom-margin">
                                <div>
                                    <input type="radio" className="radio-input" id="Choice2"
                                        name="contact" value="2" onClick={handleChange} />
                                </div>
                                <div>
                                    <label for="Choice2" className="bold-text">
                                        I have a registered business/ charity with CAC
                                        </label>
                                </div>
                            </div>
                            {openBox == "2" ? (
                                <div>
                                    <div className="content-title-sub mini-bottom-margin" >As a registered business you will get</div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Account in your business name</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>send to and receive transfers from all Nigeria banks</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Tools for business management</div>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                        <div className="NewBusinessPage-Card-wrapper">
                            <div className="flex-content mini-bottom-margin">
                                <div>
                                    <input type="radio" className="radio-input" id="Choice3"
                                        name="contact" value="3" onClick={handleChange} />
                                </div>
                                <div>
                                    <label for="Choice3" className="bold-text">
                                        I have a registered business/ charity with CAC
                                        </label>
                                </div>
                            </div>
                            {openBox == "3" ? (
                                <div>
                                    <div className="content-title-sub mini-bottom-margin" >As a registered business you will get</div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Account in your business name</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>send to and receive transfers from all Nigeria banks</div>
                                    </div>
                                    <div className="flex-content mini-bottom-margin">
                                        <div><span className="iconify check-icon" data-icon="akar-icons:circle-check" data-inline="false"></span></div>
                                        <div>Tools for business management</div>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                    </div>
                </form>
                <Link exact to="/login"><button className="next-button">next</button></Link>
            </div>
        </BodyFrame>
    )
}

export default NewBusinessPage
