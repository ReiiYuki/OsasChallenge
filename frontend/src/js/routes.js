import React from 'react'
import { Router,Route,browserHistory } from 'react-router'
import {OsasChallenge} from './components'

export default() => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={OsasChallenge}
      >
      </Route>
    </Router>
  )
}
