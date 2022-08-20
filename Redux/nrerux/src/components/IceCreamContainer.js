import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number Of iceCreams-{props.numOfIceCreams }</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProsps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProsps, mapDispatchToProps)(iceCreamContainer);
