import React from 'react'
import BankVault from "../assets/Images/510df442df8710618f7816cdf3e8e57867c5ed60.png"
import Coin from "../assets/Images/6a9a75add200e1e7cd2a1446738eb58f358551cc.png"

function Nav({ sideNav_background_color }) {
    const currentYear = new Date().getFullYear();

    return (
        <div className={sideNav_background_color}>
            <div className="company-name Bold-Name">Prospa</div>
            <div className="flex-content line-wrapper">
                <hr className="line" />
                <hr className="line" />
                <hr className="line" />
                <hr className="line" />
            </div>

            <div>
                <div className="Bold-Name side-nav-top-content">Create multiple Sub account</div>
                <div className="side-bar-content">Organise your business finances easily with multiple account no limit</div>
            </div>
            <div className="side-bar-image-container">
                <img className="coin1-img" src={Coin} alt="vault-img" />
                <img className="coin2-img" src={Coin} alt="vault-img" />
                <img className="BankVault-img" src={BankVault} alt="vault-img" />
                <img className="coin3-img" src={Coin} alt="vault-img" />
                <img className="coin4-img" src={Coin} alt="vault-img" />
            </div>
            <div className="footer">@ {currentYear} Prospa inc</div>
        </div>
    )
}

export default Nav
