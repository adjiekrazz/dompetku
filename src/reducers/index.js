import { combineReducers } from 'redux'
import user from './user'
import income from './income'
import expense from './expense'
import liffdata from './liffdata'

const rootReducer = combineReducers({
    user,
    income,
    expense,
    liffdata
})

export default rootReducer