import React from "react";

interface props{
    children?: React.ReactNode | React.ReactNode[],
    className?: string
}

const Container = ({children, className}: props) => {
    return <div className={'flex flex-col md:flex-row justify-around bg-fuchsia-50 rounded-lg ' + (className || '')}>
        {children}
    </div>
}

export default Container