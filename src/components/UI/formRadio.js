import React from 'react'

const FormRadio = ({label, value, onChange}) => {
  return (
    <>
        <div class="flex items-center pl-4 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm hover:border-indigo-600 hover:border-2">
            <input id="bordered-radio-1" type="radio" value={value} onChange={onChange} name="bordered-radio" className="w-4 h-4 accent-indigo-500" />
            <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-700">{label}</label>
        </div>
    </>
  )
}

export default FormRadio