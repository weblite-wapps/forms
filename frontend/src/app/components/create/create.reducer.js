// actions

const initialState = {
  mode: 'create',
  editPage: {
    selectedField: {},
  },
  // menuIsOpen: false,
}

const reducers = {
  SET_MODE: (state, mode) => ({
    ...state,
    mode,
  }),

  // SET_MENU_IS_OPEN: (state, menuIsOpen) => ({
  //   ...state,
  //   menuIsOpen,
  // }),

  SET_SELECTED_FIELD: (state, selectedField) => ({
    ...state,
    editPage: {
      selectedField,
    },
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
