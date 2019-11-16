import { combineReducers } from 'redux'
// reducers
import appReducer from '../app/main/app.reducer'
import previewReducer from '../app/components/preview/preview.reducer'
import createReducer from '../app/components/create/create.reducer'

export default combineReducers({
  app: appReducer,
  preview: previewReducer,
  create: createReducer,
})
