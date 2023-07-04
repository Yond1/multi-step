import { FC } from "react"
import { useAppSelector } from "../../helpers/hooks"

interface StepProps {
    index?: number
    title?: string
}

const Step:FC<StepProps> = ({index, title}) => {

  const { currentPage } = useAppSelector((store) => store.pageNumber)

  return (
    <div className="step-wrapper">
        <div className={`step-index${currentPage === index ? ' active' : ''}`}>{index}</div>
        <div className="step-content">
            <div className="step-content-number">Step {index}</div>
            <div className="step-content-title">{title}</div>
        </div>
    </div>
  )
}

export default Step