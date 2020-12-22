import { SET_LIFF_DATA } from '../constants/ActionTypes'

const initialState = {
    isInClient: false,
    language: 'en-US',
    OS: 'web',
    isLogin: false,
}

export default function liffdata(state = initialState, action) {
    switch (action.type) {
        case SET_LIFF_DATA:
            return (state = action.data)
        default:
            return state;
    }
}