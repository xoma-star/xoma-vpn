interface props{
    children: string
}

const TextHighlighted = ({children}: props) => {
    return <strong className={'inline z-30 relative before:bg-amber-200 before:-rotate-3 before:w-full before:h-2/3 before:absolute before:-z-10 before:-left-1 before:bottom-0'}>{children}</strong>
}

export default TextHighlighted