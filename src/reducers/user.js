import { SAVE_USER, REMOVE_USER } from '../constants/ActionTypes'
import liff from '@line/liff'

const initialState = {
    id: '',
    username: ''
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER:
            return { id: action.id, username: action.username }
        case REMOVE_USER:
            liff.logout()
            liff.closeWindow()
            return { id: '', username: '' }
        default:
            return state
    }
}