import React from 'react'
import DashboardFrame from '../Components/DashboardFrame/DashboardFrame'
import { CashflowCard, CashflowCardvisualization } from './VisualizationCard'
import TopCard from './TopCard'

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
            <TopCard />
            <div className="flex-justify-btw Dasboard--Top-card-wrapper">
                <CashflowCardvisualization />
                <CashflowCard />
            </div>
        </DashboardFrame>
    )
}

export default Dashboard
