// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_PATH = 'SET_PATH'
export const dispatchSetPath = (...args) =>
  dispatch(createAction(SET_PATH)(...args))

export const SET_USER_INFO = 'SET_USER_INFO'
export const dispatchSetUSerInfo = (...args) =>
  dispatch(createAction(SET_USER_INFO)(...args))

export const SET_FORM = 'SET_FORM'
export const dispatchSetForm = (...args) =>
  dispatch(createAction(SET_FORM)(...args))

export const SET_DRAFT_FORM = 'SET_DRAFT_FORM'
export const dispatchSetDraftForm = (...args) =>
  dispatch(createAction(SET_DRAFT_FORM)(...args))
