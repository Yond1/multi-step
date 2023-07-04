import HeaderForm from '../../UI/HeaderForm/HeaderForm'
import iconArcade from '../../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../../assets/images/icon-advanced.svg'
import iconPro from '../../../assets/images/icon-pro.svg'
import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import { clientInfoFn } from '../../../store/reduxSlices/ClientInfoSlice/ClientInfoSlice'

const SelectPlan = () => {

  const {priceInterval:storePriceInterval , title: storeTitle} = useAppSelector(store => store.clientInfo.data.plan)

  const [priceInterval, setPriceInterval] = useState<string>(storePriceInterval)

  const dispatch = useAppDispatch()


  interface IPlane {
    id: number,
    title: string,
    price: number,
    image: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    active: boolean,
    priceInterval: string
  }

  const [plans, setPlans] = useState<IPlane[]>([
    {id: 11, title: 'Arcade', price:9, priceInterval: priceInterval ,  image: iconArcade, active: false},
    {id: 15, title: 'Advanced', price:12, priceInterval: priceInterval , image: iconAdvanced, active: false},
    {id: 18, title: 'Pro', price: 15, priceInterval: priceInterval , image: iconPro, active: false},
  ])

  const priceHandled = () => {
    if (priceInterval === 'Monthly') {
      setPriceInterval(prev => prev = 'Yearly')
      setPlans(prev => prev.map(el => el = {...el, price: el.price*12}))
    }
    if (priceInterval === 'Yearly') {
      setPriceInterval(prev => prev = 'Monthly')
      setPlans(prev => prev.map(el => el = {...el, price: el.price/12}))

    }
  }

  const HandlePlan = (id: number) => {
    setPlans(prev => prev.map(el => el.id === id ? {...el, active: true} : {...el, active: false}))
  }

  useEffect(() => {
    setPriceInterval(storePriceInterval)
    setPlans(prev => prev.map(plan => plan.title === storeTitle ? {...plan, active: true} : {...plan, active: false}))
    setPlans(prev => priceInterval === 'Yearly' ? prev.map(el => el = {...el, price: el.price * 12})  : prev)
  }, [])

  const activePlane = useCallback(() => {
    let acitvePlan = {
      price: 0,
      title: '',
      priceInterval
    };
    plans.forEach(el => el.active ? acitvePlan = {price: el.price, title: el.title, priceInterval:priceInterval} : el)
    dispatch(clientInfoFn.addPlan(acitvePlan))
  },[plans, dispatch, dispatch])

  useEffect(() => {
    activePlane()
  },[activePlane])

  


  return (
    <section className="select-plan">
        <HeaderForm 
            title='Select your plan' 
            substring='You have the option of monthly or yearly billing.'/>
        <div className="options">
            {plans.map((plan) => {
              return (
                 <div
                  key={plan.title}
                  onClick={() => HandlePlan(plan.id)} 
                  className={`option ${plan.active ? 'active' : ''}`}>
                         <img className='option-image' src={`${plan.image}`}  alt="Arcade" />
                      <div>
                          <div className="option-title">{plan.title}</div>
                          <div className="option-priceInterval">{priceInterval === 'Monthly' ? `${plan.price}$/mo` : `${plan.price}$/year`}</div>
                      </div>
                 </div>
              )
            })}
        </div>
      <div className="change-price">
          <div className={`price-title ${priceInterval === 'Monthly' ? 'active' : ''}`}>Monthly</div>
          <div 
          onClick={priceHandled}
          className="price-button">
            <span
            style={priceInterval === 'Yearly' ? {transform: 'translate(130%)'} : {}}
            ></span>
          </div>
          <div className={`price-title ${priceInterval === 'Yearly' ? 'active' : ''}`}>Yearly</div>
      </div>
    </section>
    
    
  )
}

export default SelectPlan