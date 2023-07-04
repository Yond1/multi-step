import React, { FC } from 'react'
import ButtonSection from '../ButtonSection/ButtonSection'

interface FormWrapperProps {
    children: React.ReactNode,
    pageNumber: number
}

const FormWrapper:FC<FormWrapperProps> = ({children, pageNumber}) => {
  return (
    <div className="form-wrapper">
        {children}
        <ButtonSection currentPage={pageNumber}/>
    </div>
  )
}

export default FormWrapper