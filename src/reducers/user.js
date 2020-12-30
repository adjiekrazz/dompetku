import { SAVE_USER, REMOVE_USER } from '../constants/ActionTypes'
import liff from '@line/liff'

const initialState = {
    userId: '',
    displayName: '',
    pictureUrl: '',
    statusMessage: ''
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER:
            return (state = action.userdata)
        case REMOVE_USER:
            liff.logout()
            if (liff.isInClient) {
                liff.sendMessages([
                    {
                        type: 'text',
                        text: 'Berhasil keluar My Wallet.. 0x10008F. \n Jangan boros ya .. 0x10008D'
                    }
                ])
            }
            liff.closeWindow()
            window.location.reload()
            return { id: '', username: '' }
        default:
            return state
    }
}