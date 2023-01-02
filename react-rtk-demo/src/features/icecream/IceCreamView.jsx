import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
const IceCreamView = () => {
    const icecream = useSelector(state => 
        state.icecream.numOfIcecream
    )
    const dispatch = useDispatch()
    
  return (
    <div>
      <h2>Number of iceCream - {icecream}</h2>
      <button onClick={()=>dispatch(ordered())}>Order iceCream</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock iceCream</button>
    </div>
  )
}

export default IceCreamView