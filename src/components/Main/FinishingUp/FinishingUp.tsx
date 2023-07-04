import HeaderForm from "../../UI/HeaderForm/HeaderForm"
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../helpers/hooks"
import { clientInfoFn } from "../../../store/reduxSlices/ClientInfoSlice/ClientInfoSlice"
import { stepFn } from "../../../store/reduxSlices/PageNumberSlice/PageNumberSlice"

const FinishingUp:FC = () => {

  const info = useAppSelector(store => store.clientInfo.data)
  const [totalPrice, setTotalPrice] = useState(0)

  const priceInfo = info.plan.priceInterval === 'Monthly' ? info.plan.price : info.plan.price / 12

  const dispatch = useAppDispatch()

  const ChangedPlan = () => {
    console.log('changed')
    dispatch(stepFn.changedForPlan())
  }

  useEffect(() => {
    setTotalPrice(prev => prev = priceInfo + info.addons.reduce((acc, item) => acc += item.price, 0))
    dispatch(clientInfoFn.confirmSummary({totalPrice}))
  },[totalPrice, dispatch, clientInfoFn])
 
  return (
    <section className="finishing-up">
      <HeaderForm title="Finishing up" substring="Double-check everything looks OK before confriming."/>
      <div className="finishing-up-wrapper">
        <div className="finishing-up-plan">
          <div className="finishing-up-plan-content">
            <div className="finishing-up-plan-content-title">{info.plan.title} (Monthly)</div>
            <div className="finishing-up-plan-content-change">
              <span onClick={ChangedPlan}>Change</span>
            </div>
          </div>
          <div className="finishing-up-plan-price">{priceInfo}$/mo</div>
        </div>
        <span className="finishing-up-line"></span>
        <div className="finishing-up-addons">
          <div className="finishing-up-addons-list">
            {!info.addons.length && 'Not addons'}
            {info.addons.map(addonItem => {
              return (
                <div key={addonItem.title} className="finishing-up-addons-list-item">
                  <div className="finishing-up-addons-list-item-title">{addonItem.title}</div>
                  <div className="finishing-up-addons-list-item-price">+{addonItem.price}$/mo</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="finishing-up-total">
        <div>Total (per month)</div>
        <div className="finishing-up-total-price">
          +${totalPrice}/mo
        </div>
      </div>
    </section>
  )
}

export default FinishingUp