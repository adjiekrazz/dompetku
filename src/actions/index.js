import * as types from '../constants/ActionTypes'

export const saveUser = (id, username) => ({ type: types.SAVE_USER, id, username })
export const removeUser = () => ({ type: types.REMOVE_USER })
export const addIncome = (data) => ({ type: types.ADD_INCOME, data})
export const addExpense = (data) => ({ type: types.ADD_EXPENSE, data})
export const addDebt = (data) => ({ type: types.ADD_DEBT, data})
export const addReceivable = (data) => ({ type: types.ADD_RECEIVABLE, data})
export const deleteDebt = (id) => ({ type: types.DELETE_DEBT, id })
export const deleteReceivable = (id) => ({ type: types.DELETE_RECEIVABLE, id })
export const deleteIncome = (id) => ({ type: types.DELETE_INCOME, id })
export const deleteExpense = (id) => ({ type: types.DELETE_EXPENSE, id })
export const setLiffData = (data) => ({ type: types.SET_LIFF_DATA, data })