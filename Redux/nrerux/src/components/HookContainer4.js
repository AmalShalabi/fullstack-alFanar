import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyGrapes } from '../redux'

const HookContainer4 = () => {
    const numOfGrapes=useSelector(state=>state.grapes.numOfGrapes);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>buy grapes: {numOfGrapes}</h2>
        <button onClick={()=>dispatch(buyGrapes())}>buy Grapes</button>
    </div>
  )
}

export default HookContainer4;