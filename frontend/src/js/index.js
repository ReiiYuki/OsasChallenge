import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import 'bulma/css/bulma.css'

render (routes(), document.getElementById('app'))
