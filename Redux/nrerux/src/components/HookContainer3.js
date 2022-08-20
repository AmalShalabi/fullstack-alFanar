import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyApple } from "../redux";

function HookContainer3() {
  const numOfApples = useSelector((state) => state.apple.numOfApples);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Num of Apples : {numOfApples}</h2>
        <button onClick={()=>dispatch(buyApple())}>buy apple</button>
    </div>
  ) 
}

export default HookContainer3;
