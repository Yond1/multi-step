import React, { useCallback, useEffect } from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import { changed } from '../../../store/reduxSlices/InputSlice/inputSlice'
import { stepDone } from  '../../../store/reduxSlices/StepDoneSlice/StepDoneSlice'
import HeaderForm from '../../UI/HeaderForm/HeaderForm'
import { clientInfoFn } from '../../../store/reduxSlices/ClientInfoSlice/ClientInfoSlice'

const PersonalInfo = () => { 

    const inputValue = useAppSelector(state => state.input)
    const dispatch = useAppDispatch()

    const validateFn = useCallback((): void => {
        const { emailValue, nameValue, phoneValue } = inputValue
        if (emailValue && nameValue && phoneValue) {
            dispatch(stepDone.donePersonalInfo(true))
            dispatch(clientInfoFn.addInfo(inputValue))
        } else {
            dispatch(stepDone.donePersonalInfo(false))
            dispatch(clientInfoFn.addInfo({}))
        }
    }, [inputValue, dispatch])

    useEffect(() => {
        validateFn()
    }, [inputValue, validateFn])

  return (
    <section className="personal-info-wrapper">
        <HeaderForm 
        title='Personal info' 
        substring='Please provide your name, email, address, and phone number'/>
        <form action="" className="personal-info-form">
            <MyInput 
            changed={changed.changedName} 
            value={inputValue.nameValue} 
            label='Name' 
            type='text' 
            placeholder='Your Name...'/>
            <MyInput 
            changed={changed.changedEmail} 
            value={inputValue.emailValue} 
            label='Email Address' type='email'
            placeholder='Your Email...'/> 
            <MyInput 
            changed={changed.changedPhone} 
            value={inputValue.phoneValue} 
            required={true} label='Phone Number' 
            type='tel' 
            placeholder='e.g. +1 234 567 890'/>
        </form>
    </section>
  )
}

export default PersonalInfo