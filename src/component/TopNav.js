import React from 'react'

function TopNav({ account, sign, backIcon }) {
    return (
        <div className="flex-justify-btw">
            <div>{backIcon}</div>
            <div className="bold-text">{account}? {sign}</div>
        </div>
    )
}

export default TopNav
