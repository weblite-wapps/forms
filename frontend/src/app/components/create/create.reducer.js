// actions

const initialState = {
  mode: 'create',
  editPage: {
    selectedField: {},
  },
  menuIsOpen: false,
}

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
