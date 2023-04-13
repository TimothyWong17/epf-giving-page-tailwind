import React, {useState} from 'react'
import DonatorInfo from '../DonationFormSteps/DonatorInfo'
import DonationType from '../DonationFormSteps/DonationType'
import DonationAmount from '../DonationFormSteps/DonationAmount'
import FormButton from '../UI/formButton' 
import DonationComplete from '../DonationFormSteps/DonationComplete'

const DonationForm = () => {

  const [page, setPage] = useState(0)
  const FormTitle = ['Donator Contact Info', 'Donation Type', 'Donation Amount']

  const PageDisplay = () => {
    if(page === 0) {
        return <DonatorInfo />
    } else if (page === 1) {
        return <DonationType />
    } else if (page === 2){
        return  <DonationAmount />
    } else {
        return <DonationComplete />
    }

  }

  const handlePrevClick = (e) => {
    e.preventDefault()
    setPage((currPage) => currPage + - 1)
  }

  const handleNextClick = (e) => {
    e.preventDefault()
    setPage((currPage) => currPage + 1)
  }

  const handleFinishClick = (e) => {
    e.preventDefault()

    window.location.reload()
  }
  return (
    <>
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
            <form className='mb-0 space-y-6'>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-700'>{FormTitle[page]}</h1>
            <div>
                {PageDisplay()}
            </div>
            </form>
            <div className='container flex justify-center mx-auto'>
                <div className='mt-5 flex flex-row mx-auto items-center'>
                    { page !== 0 && page !==3 ? <FormButton text='Prev' onClick={handlePrevClick}/> : null}
                    { page !== 0 && page !==1 && page !==2? <FormButton text='Finish' onClick={handleFinishClick}/>: <FormButton text='Next' onClick={handleNextClick}/>}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DonationForm