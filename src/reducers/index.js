import user from './user'
import income from './income'
import expense from './expense'
import liffdata from './liffdata'
import debt from './debt'
import receivable from './receivable'

export default (state = {}, action) => {
    return {
        user: user(state.user, action, state),
        income: income(state.income, action, state),
        expense: expense(state.expense, action, state),
        debt: debt(state.debt, action, state),
        receivable: receivable(state.receivable, action, state),
        liffdata: liffdata(state.liffdata, action, state)
    }
}