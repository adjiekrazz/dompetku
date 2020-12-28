import { ADD_RECEIVABLE, DELETE_RECEIVABLE } from '../constants/ActionTypes'

const initialState = localStorage.receivable_data ? JSON.parse(localStorage.getItem('receivable_data')) : [];

export default function receivable(state = initialState, action) {
    switch (action.type) {
        case ADD_RECEIVABLE:
            localStorage.setItem('receivable_data', JSON.stringify([...state, action.data]))
            return [
                    ...state,
                    action.data
                ]
        case DELETE_RECEIVABLE:
            return state.filter((id) => id !== action.id);
        default: 
            return state;
    }
}