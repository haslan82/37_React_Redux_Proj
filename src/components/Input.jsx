

const Input = ({placeholder, id, type, onChange, name, value}) => {
    return (
      <input value={value} className='h-10 w-full border rounded-md p-2 outline-none mt-3' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange} />
    )
  }

export default Input
