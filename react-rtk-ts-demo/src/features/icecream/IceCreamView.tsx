import React from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
import { useAppSelector,useAppDispatch } from '../../app/hooks'

const IceCreamView = () => {
    const icecream = useAppSelector(state => 
        state.icecream.numOfIcecream
    )
    const dispatch = useAppDispatch()
    
  return (
    <div>
      <h2>Number of iceCream - {icecream}</h2>
      <button onClick={()=>dispatch(ordered())}>Order iceCream</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock iceCream</button>
    </div>
  )
}

export default IceCreamView