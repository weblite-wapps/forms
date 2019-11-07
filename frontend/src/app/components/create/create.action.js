export const SET_MODE = 'SET_MODE'
export const dispatchSetMode = (...args) =>
  dispatch(createAction(SET_MODE)(...args))

export const SET_MENU_IS_OPEN = 'SET_MENU_IS_OPEN'
export const dispatchSetMenuIsOpen = (...args) =>
  dispatch(createAction(SET_MENU_IS_OPEN)(...args))
