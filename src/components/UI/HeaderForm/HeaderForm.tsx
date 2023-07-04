import React, { FC } from 'react'


interface HeaderFormProps {
    title: string,
    substring: string
}

const HeaderForm:FC<HeaderFormProps> = ({title, substring}) => {
  return (
        <div className="form-header">
            <div className="form-header-title">
                {title}
            </div>
            <div className="form-header-substring">
                {substring}
            </div>
        </div>
  )
}

export default HeaderForm