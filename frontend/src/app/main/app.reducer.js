// modules
import * as R from 'ramda'
import { mapTypeToFields } from './app.helper'

const initialState = {
  wisId: '',
  user: {
    userId: '',
    isAdmin: true,
  },
  path: 'create', // create, preview, entries, userAnswers, stats
  users: {},
  form: {},
  draftForm: {
    fields: [],
    startingPage: {},
    endingPage: {},
  },
}

// lens
const draftFieldsLens = R.lensPath(['draftForm', 'fields'])

const reducers = {
  SET_USER_INFO: (state, userInfo) => ({ ...state, ...userInfo }),

  SET_PATH: (state, path) => ({ ...state, path }),

  SET_USERS: (state, users) => ({ ...state, users }),

  SET_FORM: (state, form) => ({ ...state, form }),

  SET_DRAFT_FORM: (state, draftForm) => ({ ...state, draftForm }),

  ADD_DRAFT_FIELD: (state, type) =>
    R.over(draftFieldsLens, R.append(mapTypeToFields[type]), state),

  REMOVE_DRAFT_FIELD: (state, fieldId) =>
    R.over(
      draftFieldsLens,
      R.reject(({ id }) => id === fieldId),
      state,
    ),

  UPDATE_DRAFT_FIELD: (state, updatedField) =>
    R.over(
      draftFieldsLens,
      R.map(field => (field.id === updatedField.id ? updatedField : field)),
      state,
    ),

  DUPLICATE_DRAFT_FIELD: (state, duplicatedField) =>
    R.over(
      draftFieldsLens,
      R.insert(R.findIndex(R.propEq('id', duplicatedField)), {
        ...duplicatedField,
        id: 'duppedId',
      }),
      state,
    ),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
