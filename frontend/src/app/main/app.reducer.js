const initialState = {
  wisId: '',
  user: {},
  path: 'create', // create, preview, entries, userAnswers, stats
  users: {},
  form: {},
  draftForm: {},
}

const reducers = {
  SET_USER_INFO: (state, userInfo) => ({ ...state, ...userInfo }),

  SET_PATH: (state, path) => ({ ...state, path }),

  SET_USERS: (state, users) => ({ ...state, users }),

  SET_FORM: (state, form) => ({ ...state, form }),

  SET_DRAFT_FORM: (state, draftForm) => ({ ...state, draftForm }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
