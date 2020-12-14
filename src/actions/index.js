import * as types from '../constants/ActionTypes'

export const saveUser = (id, username) => ({ type: types.SAVE_USER, id, username })
export const removeUser = () => ({ type: types.REMOVE_USER })