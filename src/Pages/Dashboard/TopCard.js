import React from 'react'

function TopCard() {
    return (
        <div className="flex-justify-btw Dasboard--Top-card-wrapper">
            <div className="Dasboard--Top-card1">
                <div className="flex-justify-btw">
                    <div>
                        <div className="Dasboard--Top-card-type">CURRENT ACCOUNT</div>
                        <div className="Dasboard--Top-bank">PROVIDUS BANK - 999679998</div>
                    </div>
                    <div className="Dasboard--Top-card-icon"><span className="iconify" data-icon="fa-regular:credit-card" data-inline="false"></span></div>
                </div>
                <div className="Dasboard--Top-amount">N894,563.<span className="Dasboard--Top-des">56</span></div>
            </div>
            <div className="Dasboard--Top-card2">
                <div className="flex-justify-btw">
                    <div>
                        <div className="Dasboard--Top-card-type">SAVINGS ACCOUNT</div>
                        <div className="Dasboard--Top-bank">PROVIDUS BANK - 999679998</div>
                    </div>
                    <div className="Dasboard--Top-card-icon-active"><span className="iconify" data-icon="fa-regular:credit-card" data-inline="false"></span></div>
                </div>
                <div className="Dasboard--Top-amount">N894,563.<span className="Dasboard--Top-des">56</span></div>
            </div>
        </div>
    )
}

export default TopCard
