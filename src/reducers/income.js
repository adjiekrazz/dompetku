import { ADD_INCOME, DELETE_INCOME } from '../constants/ActionTypes'

const initialState = localStorage.income_data || []

export default function income(state = initialState, action) {
    switch (action.type) {
        case ADD_INCOME:
            return [
                    ...state,
                    { ...action.data }
                ]
        case DELETE_INCOME:
            return state.income.filter((id) => id !== action.id);
        default: 
            return state;
    }
}