import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants/ActionTypes'

const initialState = localStorage.expense_data ? JSON.parse(localStorage.getItem('expense_data')) : [];

export default function expense(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            localStorage.setItem('expense_data', JSON.stringify([...state, action.data]))
            return [
                    ...state,
                    action.data
                ]
            case DELETE_EXPENSE:
                localStorage.setItem('expense_data', JSON.stringify(state.filter((item) => item.id !== action.id)))
                return state.filter((item) => item.id !== action.id);
        default: 
            return state;
    }
}