import { SAVE_USER, REMOVE_USER } from '../constants/ActionTypes'
import liff from '@line/liff'
import { rupiah } from '../utils'
import { LIFF_URL } from '../constants/url'

const initialState = {
    userId: '',
    displayName: '',
    pictureUrl: '',
    statusMessage: ''
}

export default function user(state = initialState, action, root) {
    switch (action.type) {
        case SAVE_USER:
            return (state = action.userdata)
        case REMOVE_USER:
            const incomeTotal = root.income.length === 0 ? 0 : root.income.reduce((val, n) => (val + Number(n.amount)), 0)
            const expenseTotal = root.expense.length === 0 ? 0 : root.expense.reduce((val, n) => (val + Number(n.amount)), 0)
            const debtTotal = root.debt.length === 0 ? 0 : root.debt.reduce((val, n) => (val + Number(n.amount)), 0)
            const receivableTotal = root.debt.length === 0 ? 0 : root.debt.reduce((val, n) => (val + Number(n.amount)), 0)
            const saldo = (incomeTotal + debtTotal) - (receivableTotal + expenseTotal)

            liff.sendMessages([
                {
                    type: 'text',
                    text: 'Isi dompet kamu :\nPemasukan : ' + rupiah(incomeTotal, 0, true)
                            +'\nPiutang : ' + rupiah(receivableTotal, 0, true)
                            +'\nHutang : ' + rupiah(debtTotal, 0, true)
                            +'\nPengeluaran : ' + rupiah(expenseTotal, 0, true)
                            +'\n\nSisa saldo : ' + rupiah(saldo, 0, true)
                            +'\n\nMasuk dompet lagi ? ' + LIFF_URL
                }
            ]).then(liff.logout())
            liff.closeWindow()
            window.location.reload()
            return { id: '', username: '' }
        default:
            return state
    }
}