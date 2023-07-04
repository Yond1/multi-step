import React, { FC } from 'react'

interface SampleProps {
    children: React.ReactNode
}

const Sample:FC<SampleProps> = ({children}) => {
  return (
    <main className="sample">
        {children}
    </main>
  )
}

export default Sample