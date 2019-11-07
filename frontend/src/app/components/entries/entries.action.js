export const SET_USER_ID = 'SET_USER_ID'
export const dispatchSetUserId = (...args) =>
  dispatch(createAction(SET_USER_ID)(...args))

export const SET_VALUES = 'SET_VALUES'
export const dispatchSetValues = (...args) =>
  dispatch(createAction(SET_VALUES)(...args))
