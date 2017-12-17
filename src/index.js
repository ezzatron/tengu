import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'

ReactDOM.render(
  React.createElement(Root),
  document.getElementById('app')
)
