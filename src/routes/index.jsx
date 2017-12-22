import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { ThemeProvider } from 'styled-components'
import Theme from 'core/constants/theme'
import IntlProviderWrapper from 'core/components/IntlProviderWrapper'
import injectGlobal from 'core/assets//style/global'
import Main from 'containers/Main'
import rootSagas from '../sagas'
import store, { sagaMiddleware } from '../store'
import shoes from './shoes'

const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSagas)

const Routes = () => {
  injectGlobal(Theme)

  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <IntlProviderWrapper>
          <Router history={history}>
            <Route path="/">
              <IndexRoute component={Main} />
              {shoes}
            </Route>
          </Router>
        </IntlProviderWrapper>
      </Provider>
    </ThemeProvider>
  )
}

export default Routes
