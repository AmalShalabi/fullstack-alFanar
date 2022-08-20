import { combineReducers } from "redux";
import appleReducer from "./apple/appleReducer";
import cakeReducer from "./cakes/cakeReducer";
import grapesReducer from "./grapes/grapesReducer";
import iceCreamReducer from './icaCream/iceCreamReducer'
import mangoReducer from './mango/mangoReducer'

const rootReducer= combineReducers ({
    cake:cakeReducer,
    iceCream : iceCreamReducer,
    mango: mangoReducer,
    apple: appleReducer,
    grapes: grapesReducer
})

export default rootReducer