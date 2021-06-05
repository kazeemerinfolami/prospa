import React from 'react'
import { Line } from "react-chartjs-2"

export function CashflowCardvisualization() {
    const Data = {
        labels: ["jan", "fed", "mar", "may"],
        dataSets: [
            {
                label: "Sales for 2020",
                data: [12, 45, 34, 56]
            }
        ]
    }
    return (
        <div className="Dashboard--Table-card chart-wrapper">
            <div className="Dasboard--Top-card-type">January summary</div>
            <div>
                <Line data={Data} />
            </div>
        </div>
    )
}


export function CashflowCard() {
    return (
        <div className="Dashboard--Table-overflow-card">
            <div className="Dasboard--Top-card-type">Cash outflow</div>
            <div className="margin-Top">
                <div className="flex-content mini-bottom-margin">
                    <div className="flex-content Cashflow-body">
                        <div className="Dashboard--overflow-icon Dashboard--bank-icon"><span className="iconify" data-icon="clarity:bank-line" data-inline="false"></span></div>
                        <div className="Cashflow-body-name">Bank Fees</div>
                    </div>
                    <div className="Cashflow-body">
                        <div className="Cashflow-body-amount">-N234,567</div>
                        <div>bar</div>
                    </div>
                </div>
                <div className="flex-content mini-bottom-margin">
                    <div className="flex-content Cashflow-body">
                        <div className="Dashboard--overflow-icon Dashboard--internet-icon"><span class="iconify" data-icon="dashicons:cloud" data-inline="false"></span></div>
                        <div className="Cashflow-body-name">Internet</div>
                    </div>
                    <div className="Cashflow-body">
                        <div className="Cashflow-body-amount">-N234,567</div>
                        <div>bar</div>
                    </div>
                </div>
                <div className="flex-content mini-bottom-margin">
                    <div className="flex-content Cashflow-body">
                        <div className="Dashboard--overflow-icon Dashboard--marketing-icon"><span className="iconify" data-icon="heroicons-solid:speakerphone" data-inline="false"></span></div>
                        <div className="Cashflow-body-name">Marketing</div>
                    </div>
                    <div className="Cashflow-body">
                        <div className="Cashflow-body-amount">-N234,567</div>
                        <div>bar</div>
                    </div>
                </div>
                <div className="flex-content mini-bottom-margin">
                    <div className="flex-content Cashflow-body">
                        <div className="Dashboard--overflow-icon Dashboard--transfer-icon"><span className="iconify" data-icon="bi:slash-circle-fill" data-inline="false"></span></div>
                        <div className="Cashflow-body-name">Transfer</div>
                    </div>
                    <div className="Cashflow-body">
                        <div className="Cashflow-body-amount">-N234,567</div>
                        <div>bar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
