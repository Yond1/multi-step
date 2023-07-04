import { FC, useId } from 'react'

interface AddonsCardProps {
    title: string
    substring: string
    price:number
    onClick: Function
    included: boolean
}

const AddonsCard:FC <AddonsCardProps>  = ({price, substring, title, onClick, included}) => {

    const id = useId()
    const checkedToggler = () => {
        onClick()
    }

  return (
        <div 
        onClick={checkedToggler}
        className={`${included ? 'addons-card active' : 'addons-card'}`}>
                <div className='addons-card-left'>
                    <input type="checkbox" name={title} id={id} />
                    <span className={`checkmark${included ? ' checked' : ''}`}></span>
                    <label 
                    htmlFor={id}>
                    <h4>{title}</h4>
                    <p>{substring}</p>
                    </label>
                </div>
                <span className='addons-card-right'>+${price}/mo</span>
        </div>
  )
}

export default AddonsCard