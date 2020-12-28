import { ADD_DEBT, DELETE_DEBT } from '../constants/ActionTypes'

const initialState = localStorage.debt_data ? JSON.parse(localStorage.getItem('debt_data')) : [];

export default function debt(state = initialState, action) {
    switch (action.type) {
        case ADD_DEBT:
            localStorage.setItem('debt_data', JSON.stringify([...state, action.data]))
            return [
                    ...state,
                    action.data
                ]
            case DELETE_DEBT:
                return state.filter((item) => item.id !== action.id);
        default: 
            return state;
    }
}