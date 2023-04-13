import React from 'react'
import CurrencyInput from 'react-currency-input-field';

const FormDollarAmount = ({label, type, value, onChange}) => {
  return (
    <>
        <div>
            <label htmlFor='input' className='block text-sm font-medium text-gray-700'>
                {label}
            </label>
            <div className='mt-1'>
            <CurrencyInput
                id="Donation-Amount"
                name="DoonationAmount"
                placeholder="Please enter a number"
                prefix='$'
                defaultValue={0}
                decimalsLimit={2}
                decimalScale={2}
                onValueChange={(value, name) => console.log(value, name)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
            />
            </div>

        </div>
    </>
  )
}

export default FormDollarAmount