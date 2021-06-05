import React from 'react'
import DashboardFrame from '../Components/DashboardFrame/DashboardFrame'

function Dashboard() {
    return (
        <DashboardFrame pageName="Dashboard">
            <div className="flex-justify-btw">
                <div>
                    <div className="Dasboard--welcome-message">Welcome Back, Kazeem</div>
                    <div className="Dasboard--welcome-last-seen">Here's what has been happening in the last <span> 7 days</span></div>
                </div>
                <div>
                    <button className="Dasboard--welcome-button">Add a sub account</button>
                </div>
            </div>
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
            <div className="flex-justify-btw Dasboard--Top-card-wrapper">
                <div className="Dashboard--Table-card">
                    <div className="Dasboard--Top-card-type">January summary</div>
                </div>
                <div className="Dashboard--Table-overflow-card">
                    <div className="Dasboard--Top-card-type">Cash outflow</div>
                    <div className="margin-Top">
                        <div className="flex-content mini-bottom-margin">
                            <div className="flex-content Cashflow-body">
                                <div className="Dashboard--overflow-icon"><span className="iconify" data-icon="clarity:bank-line" data-inline="false"></span></div>
                                <div className="Cashflow-body-name">Bank Fees</div>
                            </div>
                            <div className="Cashflow-body">
                                <div className="Cashflow-body-amount">-N234,567</div>
                                <div>bar</div>
                            </div>
                        </div>
                        <div className="flex-content mini-bottom-margin">
                            <div className="flex-content Cashflow-body">
                                <div className="Dashboard--overflow-icon"><span className="iconify" data-icon="clarity:bank-line" data-inline="false"></span></div>
                                <div className="Cashflow-body-name">Bank Fees</div>
                            </div>
                            <div className="Cashflow-body">
                                <div className="Cashflow-body-amount">-N234,567</div>
                                <div>bar</div>
                            </div>
                        </div>
                        <div className="flex-content mini-bottom-margin">
                            <div className="flex-content Cashflow-body">
                                <div className="Dashboard--overflow-icon"><span className="iconify" data-icon="clarity:bank-line" data-inline="false"></span></div>
                                <div className="Cashflow-body-name">Bank Fees</div>
                            </div>
                            <div className="Cashflow-body">
                                <div className="Cashflow-body-amount">-N234,567</div>
                                <div>bar</div>
                            </div>
                        </div>
                        <div className="flex-content mini-bottom-margin">
                            <div className="flex-content Cashflow-body">
                                <div className="Dashboard--overflow-icon"><span className="iconify" data-icon="clarity:bank-line" data-inline="false"></span></div>
                                <div className="Cashflow-body-name">Bank Fees</div>
                            </div>
                            <div className="Cashflow-body">
                                <div className="Cashflow-body-amount">-N234,567</div>
                                <div>bar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardFrame>
    )
}

export default Dashboard
