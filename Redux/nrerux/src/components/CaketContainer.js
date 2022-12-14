import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CaketContainer(props) {
  return (
    <div>
        <h2>Number Of Cakes-{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProsps= state =>{
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps= dispatch=>{
  return{
    buyCake: ( dispatch(buyCake()))
  }
}

export default connect(
  mapStateToProsps,mapDispatchToProps
) (CaketContainer)