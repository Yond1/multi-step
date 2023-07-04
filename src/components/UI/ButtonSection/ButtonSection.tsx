import { FC, useCallback, useEffect, useState } from "react"
import MyButton from "../MyButton/MyButton"
import { stepFn } from '../../../store/reduxSlices/PageNumberSlice/PageNumberSlice'
import { clientInfoFn } from "../../../store/reduxSlices/ClientInfoSlice/ClientInfoSlice"
import { useAppDispatch, useAppSelector } from "../../helpers/hooks"

interface ButtonSectionProps {
    currentPage: number
}

const ButtonSection:FC <ButtonSectionProps> = ({currentPage}) => {

  const [disabled, setDisabled] = useState(true)

  const {stepDone, pageNumber, clientInfo} = useAppSelector(state => state)

  const dispatch = useAppDispatch()

  const changeDisabled = useCallback(() => {
    if (pageNumber.currentPage === 1 && stepDone.PersonalInfo) {
      setDisabled(false)
    } else {
      // setDisabled(true)
    }
  },[pageNumber.currentPage, stepDone.PersonalInfo])

  const increment = () => {
    dispatch(stepFn.increment())
  }
  const decrement = () => {
    dispatch(stepFn.decrement())
  }
  const confrim = () => {
    dispatch(stepFn.increment())
    console.log(clientInfo.data)
  }

  useEffect(() => {
    changeDisabled()
  },[stepDone.PersonalInfo, pageNumber.currentPage,changeDisabled])
  

  return (
    <section className="button-section">
        {currentPage === 4 &&                    <MyButton 
                                                  onClick={confrim}
                                                  position="right" 
                                                  title="Confrim"/>} 
        {currentPage < 4 &&                      <MyButton 
                                                  onClick={increment} 
                                                  disabled={disabled} 
                                                  title="Next Step" 
                                                  position="right"/>}
        {currentPage >= 2 && currentPage <= 4 && <MyButton 
                                                  onClick={decrement} 
                                                  title="Go Back" 
                                                  position="left"/>}
    </section>
  )
}

export default ButtonSection