import { combineReducers } from 'redux'
// reducers
import appReducer from '../app/main/app.reducer'

export default combineReducers({
  app: appReducer,
})
