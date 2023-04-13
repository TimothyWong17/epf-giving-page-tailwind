import React from 'react'

const FormInput = ({label, type, value, onChange}) => {
  return (
    <>
        <div>
            <label htmlFor='input' className='block text-sm font-medium text-gray-700'>
                {label}
            </label>
            <div className='mt-1'>
            <input type={type} value={value} onChange={onChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"/>
            </div>

        </div>
    </>
  )
}

export default FormInput