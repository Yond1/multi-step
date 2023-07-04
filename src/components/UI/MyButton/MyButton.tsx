import React, { FC } from 'react'


interface MyButtonProps {
    title: string,
    position: string,
    disabled?: boolean,
    onClick?: Function | undefined
}


const MyButton:FC <MyButtonProps> = ({disabled = false, title, position, onClick}) => {


  const onHandler = () => {
    onClick && onClick()
  }

  return (
    <button 
    type='button'
    disabled={disabled}
    onClick={onHandler}
    className={`my-button${position === 'right' 
                                                ? ' next' 
                                                : ' back'}`}>

        {title}
    </button>
  )
}

export default MyButton