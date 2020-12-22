import { ADD_INCOME, ADD_EXPENSE, DELETE_INCOME, DELETE_EXPENSE } from '../constants/ActionTypes'

const initialState = {
    income: localStorage.income_data || [],
    expense: localStorage.expense_data || []
}

export default function wallet(state = initialState, action) {
    switch (action.type) {
        case ADD_INCOME:
            let newIncome = state.income.slice()
            newIncome.splice(action.id, 0, action.amount, action.desc)
            return newIncome
        case ADD_EXPENSE:
            let newExpense = state.expense.slice()
            newExpense.splice(action.id, 0, action.amount, action.desc)
            return newState
        case DELETE_INCOME:
            return state.income.filter((id) => id !== action.id)
        case DELETE_EXPENSE:
            return state.expense.filter((id) => id !== action.id)
        default: 
            return state;
    }
}