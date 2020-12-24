import * as types from '../constants/ActionTypes'

export const saveUser = (id, username) => ({ type: types.SAVE_USER, id, username })
export const removeUser = () => ({ type: types.REMOVE_USER })
export const addIncome = (data) => ({ type: types.ADD_INCOME, data})
export const addExpense = (id, amount, desc) => ({ type: types.ADD_EXPENSE, id, amount, desc})
export const deleteIncome = (id) => ({ type: types.DELETE_INCOME, id })
export const deleteExpense = (id) => ({ type: types.DELETE_EXPENSE, id })
export const setLiffData = (data) => ({ type: types.SET_LIFF_DATA, data })