import React, {useState} from 'react';
import './formStepper.css';
import {TiTick} from 'react-icons/ti';

const FormStepper = () => { 
  
    const steps = ['Donator Info', 'Donation Type', 'Payment']
    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)


  return (
    <>
    <div className='flex justify-between'>
    {steps.map((step, i) => {
        return(
            <div 
                key={i} 
                className={`step-item ${currentStep === i+1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}
            >
                <div className='step'>{ (i + 1 < currentStep || complete)? <TiTick size={24} />: i + 1 }</div>
                <p className='text-indigo-300'>{step}</p>
            </div>
        )
    })}
    </div>

    {!complete &&     <button className='btn' onClick={() => {
            currentStep === steps.length ? setComplete(true) :  setCurrentStep((prevStep) => prevStep + 1)
        }}>{currentStep === steps.length ? 'Finish' : 'Next'} 
    </button>}
    </>
  )
}

export default FormStepper  