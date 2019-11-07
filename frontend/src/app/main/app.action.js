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

export const ADD_TO_DRAFT_FORM = 'ADD_TO_DRAFT_FORM'
export const dispatchAddToDraftForm = (...args) =>
  dispatch(createAction(ADD_TO_DRAFT_FORM)(...args))

export const REMOVE_FROM_DRAFT_FORM = 'REMOVE_FROM_DRAFT_FORM'
export const dispatchRemoveFromDraftForm = (...args) =>
  dispatch(createAction(REMOVE_FROM_DRAFT_FORM)(...args))
