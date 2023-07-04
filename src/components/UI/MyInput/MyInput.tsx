import { FC, HTMLInputTypeAttribute, useId } from "react"
import { useAppDispatch } from "../../helpers/hooks"

interface MyInputProps {
    label: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    required?: Boolean,
    value: string,
    changed: Function
}

const MyInput:FC<MyInputProps>= ({label, type, placeholder, required, value, changed}) => {

    const id = useId()

    const dispatch = useAppDispatch()


  return (
    <>
        <label className="my-label"  htmlFor={id}>
            {label}
            {required 
            && 
            !value 
            && 
            <span>This field is required</span>}
        </label>
        <input 
        style={required && !value ? {border: '3px solid red'} : undefined}
        className="my-input" 
        id={id} 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => dispatch(changed(e.target.value))}
         />
    </>
  )
}

export default MyInput