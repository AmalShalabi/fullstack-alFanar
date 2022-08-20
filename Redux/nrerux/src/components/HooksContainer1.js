import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { buyIceCream } from '../redux'

function HooksContainer1() {
    const numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Num Of iceCreams - {numOfIceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksContainer1