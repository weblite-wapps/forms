// actions

const initialState = {
  values: {},
  mode: '',
}

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
