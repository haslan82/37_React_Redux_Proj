
const Button = ({onClick, btnText} ) => {
  return (
    <button className='w-full h-10 bg-indigo-600 mt-4 rounded-md border-transparent
     flex items-center text-white justify-center' onClick={onClick}>{btnText}</button>
  )
}

export default Button;
