import { fork } from 'redux-saga/effects'
import { makeRestartable } from 'core/utils/saga'
import shoesSaga from 'state/shoes/shoes-saga'

const root = makeRestartable(function* run() {
  yield fork(shoesSaga)
})

export default root
