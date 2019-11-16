import { createAction } from 'redux-actions'

import { dispatch } from '../../../setup/redux'

export const SET_MODE = 'SET_MODE'
export const dispatchSetMode = (...args) =>
  dispatch(createAction(SET_MODE)(...args))
