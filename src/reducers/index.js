import { combineReducers } from 'redux'
import user from './user'
import income from './income'
import expense from './expense'
import liffdata from './liffdata'
import debt from './debt'
import receivable from './receivable'

const rootReducer = combineReducers({
    user,
    income,
    expense,
    debt,
    receivable,
    liffdata
})

export default rootReducer