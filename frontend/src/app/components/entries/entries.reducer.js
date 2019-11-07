// actions

const initialState = {
  userId: '',
  values: {},
}

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
