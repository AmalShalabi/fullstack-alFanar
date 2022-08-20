import { BUY_MANGO } from "./mangoTypes";

const initialState={
    numOfMango:30
}

const manogoReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_MANGO : return {
            numOfMango: state.numOfMango-1

        }
        default: return state
    }

}

export default manogoReducer