import { FC, useCallback, useEffect, useState } from 'react'
import AddonsCard from '../../UI/AddonsCard/AddonsCard'
import HeaderForm from '../../UI/HeaderForm/HeaderForm'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import { clientInfoFn } from '../../../store/reduxSlices/ClientInfoSlice/ClientInfoSlice'

const PickAddons:FC = () => {

  interface IAddonItem {
    id: number,
    title: string
    substring: string
    price: number
    included: boolean
  }

  const [addons, setAddons] = useState<Array<IAddonItem>>([
    {id:100 ,title: 'Online Service' , substring: 'Access to multiplayer games', price: 1, included:false},
    {id:101 ,title: 'Larger Storage' , substring: 'Extra 1TB of cloud save', price: 2, included:false},
    {id:102 ,title: 'Customizable Profile' , substring: 'Custom theme your profile', price: 3, included:false},
  ])

  const [activeId, setActiveId] = useState<Array<number | undefined>>([])

  const dispatch = useAppDispatch()
  const storeAddons = useAppSelector(store => store.clientInfo.data)

  const includeHandler = (id: number) => {
    setAddons(prev => prev = addons.map(addonItem => addonItem.id === id 
      ? {...addonItem,included: !addonItem.included} 
      : addonItem))
  }

  const addonsFiltered = useCallback(() => {
    return addons.filter(addonItem => addonItem.included)
  },[addons])

  useEffect(() => {
    dispatch(clientInfoFn.addAddons(addonsFiltered()))
  },[dispatch, addons, addonsFiltered])

  useEffect(() => {
    storeAddons.addons 
    && 
    storeAddons.addons.forEach(addonItem => setActiveId([activeId.push(addonItem.id)]))
    setAddons(prev => prev = addons.map(addonItem => addonItem.id === (activeId[0]) 
    ? (setActiveId([activeId.shift()]) ,{...addonItem, included: true})
    : addonItem))
  },[])

  return (
    <section className="pick-addons">
      <HeaderForm 
          title='Pick add-ons' 
          substring='Add-ons help enhance your gaming experience.'/>
          <div className="addons">
            {addons.map(addonItem => {
              return (
                <AddonsCard 
                onClick={() => includeHandler(addonItem.id)}
                key={addonItem.id} 
                title={addonItem.title} 
                substring={addonItem.substring} 
                price={addonItem.price}
                included={addonItem.included}/>
              )
            })}
          </div>
    </section>
  )
}

export default PickAddons