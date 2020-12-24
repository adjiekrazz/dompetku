import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants/ActionTypes'

const initialState = localStorage.expense_data || [{}]

export default function expense(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            let newExpense = state.expense.slice()
            newExpense.splice(action.id, action.date, 0, action.amount, action.desc)
            return newState
        case DELETE_EXPENSE:
            return state.expense.filter((id) => id !== action.id)
        default: 
            return state;
    }
}