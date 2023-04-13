import React from 'react'

const FormButton = ({text, onClick, isDisabled}) => {
  return (
    <button 
        className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
        onClick={onClick}
        disabled={isDisabled}
    > 
        {text}
    </button>
  )
}

export default FormButton