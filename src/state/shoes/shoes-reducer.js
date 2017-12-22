import { createReducer } from 'core/utils/redux'
import { ShoesTypes } from './shoes-action'

const initialState = {
  form: {},
  shoes: []
}

const reducer = {
  [ShoesTypes.UPDATE_FIELD_FORM](state, { data }) {
    return { ...state, form: { ...state.form, ...data } }
  },
  [ShoesTypes.LIST_SHOES](state, { data }) {
    return { ...state, shoes: data }
  },
  [ShoesTypes.LOADED_SHOES](state, { res }) {
    return { ...state, shoes: res.data }
  }
}

export default createReducer(initialState, reducer)
