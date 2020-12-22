import { combineReducers } from 'redux'
import user from './user'
import wallet from './wallet'
import liffdata from './liffdata'

const rootReducer = combineReducers({
    user,
    wallet,
    liffdata
})

export default rootReducer