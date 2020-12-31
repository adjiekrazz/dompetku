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
            const incomeTotal = rupiah(root.income.length === 0 ? 0 : root.income.reduce((val, n) => (val + Number(n.amount)), 0), 0, true)
            const expenseTotal = rupiah(root.expense.length === 0 ? 0 : root.expense.reduce((val, n) => (val + Number(n.amount)), 0), 0, true)
            const debtTotal = rupiah(root.debt.length === 0 ? 0 : root.debt.reduce((val, n) => (val + Number(n.amount)), 0), 0, true)
            const receivableTotal = rupiah(root.debt.length === 0 ? 0 : root.debt.reduce((val, n) => (val + Number(n.amount)), 0), 0, true)
            const saldo = (incomeTotal + debtTotal) - (receivableTotal + expenseTotal)

            liff.sendMessages([
                {
                    "type": "bubble",
                    "size": "kilo",
                    "direction": "ltr",
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Isi dompet kamu :",
                          "weight": "bold",
                          "style": "normal"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": "Pemasukan "+incomeTotal,
                              "color": "#ffffff",
                              "weight": "bold",
                              "style": "normal",
                              "decoration": "none",
                              "align": "center"
                            }
                          ],
                          "alignItems": "center",
                          "backgroundColor": "#5cb85c",
                          "paddingAll": "5px",
                          "cornerRadius": "2px",
                          "justifyContent": "center",
                          "margin": "2px"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": "Piutang "+receivableTotal,
                              "color": "#ffffff",
                              "weight": "bold",
                              "style": "normal",
                              "decoration": "none",
                              "align": "center"
                            }
                          ],
                          "backgroundColor": "#0275d8",
                          "margin": "2px",
                          "paddingAll": "5px",
                          "cornerRadius": "2px",
                          "justifyContent": "center",
                          "alignItems": "center"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": "Hutang "+debtTotal,
                              "color": "#ffffff",
                              "weight": "bold",
                              "style": "normal",
                              "decoration": "none",
                              "align": "center"
                            }
                          ],
                          "margin": "2px",
                          "backgroundColor": "#f0ad4e",
                          "cornerRadius": "2px",
                          "justifyContent": "center",
                          "alignItems": "center",
                          "paddingAll": "5px"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": "Pengeluaran "+expenseTotal,
                              "color": "#ffffff",
                              "weight": "bold",
                              "style": "normal",
                              "decoration": "none",
                              "align": "center"
                            }
                          ],
                          "cornerRadius": "2px",
                          "justifyContent": "center",
                          "alignItems": "center",
                          "paddingAll": "5px",
                          "backgroundColor": "#d9534f",
                          "margin": "2px"
                        },
                        {
                          "type": "text",
                          "text": "Sisa saldo :",
                          "weight": "bold",
                          "style": "normal",
                          "margin": "5px"
                        },
                        {
                          "type": "text",
                          "text": "Rp 18.000,00",
                          "weight": "bold",
                          "style": "normal"
                        }
                      ],
                      "backgroundColor": "#FFFFFF"
                    },
                    "footer": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "button",
                          "action": {
                            "type": "uri",
                            "label": "Masuk dompet lagi ?",
                            "uri": LIFF_URL
                          },
                          "height": "sm",
                          "style": "secondary"
                        }
                      ]
                    },
                    "styles": {
                      "header": {
                        "backgroundColor": "#eb9e34"
                      },
                      "hero": {
                        "backgroundColor": "#eb9e34"
                      },
                      "body": {
                        "backgroundColor": "#ffffff"
                      },
                      "footer": {
                        "separator": false
                      }
                    }
                  }
            ]).then(liff.logout())
            liff.closeWindow()
            window.location.reload()
            return { id: '', username: '' }
        default:
            return state
    }
}