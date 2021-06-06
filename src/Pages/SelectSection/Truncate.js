import React, { useState } from 'react'

const ReadMore = ({ header, children }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [openTable, setOpenTable] = useState(true)

    const text = children;

    const resultString = isTruncated && text;
    const toggleTruncated = () => {
        setIsTruncated(!isTruncated);
        setOpenTable(!openTable)
    };
    return (
        <>
            <div className="EdutableBodyTitle">
                <div onClick={toggleTruncated}>{header}</div>
            </div>
            {resultString}
        </>
    );
};

export default ReadMore
