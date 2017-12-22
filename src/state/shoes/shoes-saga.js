import { takeEvery, call, put } from 'redux-saga/effects'
import ShoesProvider from 'core/providers/shoes'
import { ShoesActions, ShoesTypes } from './shoes-action'

export function* loadShoes() {
  const shoes = yield call(ShoesProvider.all)

  yield put(ShoesActions.loadedShoes(shoes))
}

export function* save({ form }) {
  yield call([ShoesProvider, ShoesProvider.save], form)

  yield put(ShoesActions.loadShoes())
}

export default function* root() {
  yield [
    takeEvery(ShoesTypes.LOAD_SHOES, loadShoes)
  ]
}
