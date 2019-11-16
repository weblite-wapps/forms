// actions

const initialState = {
  values: {},
  mode: 'starting',
}

const reducers = {
  SET_MODE: (state, mode) => ({
    ...state,
    mode,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
