import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import shoes from 'state/shoes/shoes-reducer'

export default combineReducers({
  routing,
  form,
  shoes
})
