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
            liff.sendMessages([
                {
                    type: 'text',
                    text: 'Berhasil keluar My Wallet.. $',
                    emojis: [
                        {
                            index: 28,
                            productId: '5ac1bfd5040ab15980c9b435',
                            emojiId: '009'
                        }
                    ]
                }
            ]).then(liff.logout())
            liff.closeWindow()
            window.location.reload()
            return { id: '', username: '' }
        default:
            return state
    }
}