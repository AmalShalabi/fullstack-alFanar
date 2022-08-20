import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { buyMango } from '../redux';

function HooksContainer2() {
   const numOfMango=useSelector(state=>state.mango.numOfMango)
   const dispatch=useDispatch();
  return (
    <div>
        <h2>Num Of Mango : {numOfMango}</h2>
        <button onClick={()=>dispatch(buyMango())} >buy Mango </button>
    </div>
  )
}

export default HooksContainer2