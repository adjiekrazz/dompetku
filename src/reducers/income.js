import { ADD_INCOME, DELETE_INCOME } from '../constants/ActionTypes'

const initialState = localStorage.income_data ? JSON.parse(localStorage.getItem('income_data')) : [];

export default function income(state = initialState, action) {
    switch (action.type) {
        case ADD_INCOME:
            localStorage.setItem('income_data', JSON.stringify([...state, action.data]))
            return [
                    ...state,
                    action.data
            ]
        case DELETE_INCOME:
            localStorage.setItem('income_data', JSON.stringify(state.filter((item) => item.id !== action.id)))
            return state.filter((item) => item.id !== action.id);
        default: 
            return state;
    }
}