/* eslint-disable */
import get from 'lodash/get'
import { delay } from 'redux-saga'
import { spawn, call, put } from 'redux-saga/effects'

export const makeRestartable = (saga, actions) => function* () {
  const store = require('../../store').default

  yield spawn(function* () {
    while (true) {
      try {
        yield call(saga)
      } catch (error) {
        if (get(error, 'response.status')) {
          //Aqui são os toaster de erro e etc
          console.log('http error')
        } else {
          console.error(error)
        }
      }

      yield delay(1000)
    }
  })
}
