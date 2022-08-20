import { BUY_GRAPES } from "./grapesTypes";

const initialState = {
  numOfGrapes: 60
};

const grapesReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_GRAPES : return {
            numOfGrapes: state.numOfGrapes-1
        }
        default: return state
    }

}

export default grapesReducer