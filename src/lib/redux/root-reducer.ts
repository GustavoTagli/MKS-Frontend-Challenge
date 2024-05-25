import { combineReducers } from 'redux'

import cartSlice from './cart/slice'

const rootReducer = combineReducers({ cart: cartSlice })

export default rootReducer
