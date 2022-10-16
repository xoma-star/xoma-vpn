import React from "react";

interface props{
    children?: React.ReactNode | React.ReactNode[],
    className?: string
}

const Block = ({children, className}: props) => {
    return <div className={'p-4 ' + (className || '')}>
        {children}
    </div>
}

export default Block