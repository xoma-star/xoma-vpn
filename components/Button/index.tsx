interface props{
    children: string,
    onClick?(): void,
    className?: string
}

const Button = ({children, onClick, className = ''}: props) => {

    return <button
        className={'text-white border-4 border-white text-xl px-4 py-2 hover:bg-white hover:text-black duration-300 ' + (className)}
        onClick={onClick}>
        {children}
    </button>
}

export default Button