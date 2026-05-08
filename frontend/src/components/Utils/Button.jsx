

const Button = ({onClick = null, className='', children}) => {
    return (
        <button onClick={onClick} className={className ? className :"bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50" }> {children} </button>
    );
};

export default Button;