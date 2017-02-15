import React from 'react'
import { Router,Route,browserHistory } from 'react-router'
import HelloWorld from './HelloWorld'

export default() => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={HelloWorld}
      >
      </Route>
    </Router>
  )
}
