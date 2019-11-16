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

export const ADD_DRAFT_FIELD = 'ADD_DRAFT_FIELD'
export const dispatchAddDraftField = (...args) =>
  dispatch(createAction(ADD_DRAFT_FIELD)(...args))

export const REMOVE_DRAFT_FIELD = 'REMOVE_DRAFT_FIELD'
export const dispatchRemoveDraftField = (...args) =>
  dispatch(createAction(REMOVE_DRAFT_FIELD)(...args))

export const UPDATE_DRAFT_FIELD = 'UPDATE_DRAFT_FIELD'
export const dispatchUpdateDraftField = (...args) =>
  dispatch(createAction(UPDATE_DRAFT_FIELD)(...args))
