// actions

const initialState = {
  selectedUserId: '',
}

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
