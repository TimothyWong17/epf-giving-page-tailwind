import React from 'react'
import FormInput from '../UI/formInput'

const DonatorInfo = () => {
  return (
    <>
      <FormInput label="First Name" type='text'  onChange={e => console.log(e)}/>
      <FormInput label="Last Name" type='text'  onChange={e => console.log(e)}/>
      <FormInput label="Email" type='email'  onChange={e => console.log(e)}/>
      <FormInput label="Phone" type='tel'  onChange={e => console.log(e)}/>
    </>
  )
}

export default DonatorInfo