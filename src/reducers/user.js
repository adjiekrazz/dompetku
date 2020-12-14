import { SAVE_USER, REMOVE_USER } from '../constants/ActionTypes'

const initialState = {
    id: '',
    username: ''
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER:
            return ( state.id = action.id, state.username = action.username )
        case REMOVE_USER:
            return ( state.id = '', state.username = '' )
        default:
            return state
    }
}