import { BUY_APPLE } from "./appleTypes";

const initialState={

    numOfApples:40
}

const appleReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_APPLE : return {
            ...state,
            numOfApples: state.numOfApples-1
        }
        default : return state
    }

}

export default appleReducer