import 'babel-polyfill'

import React from 'react'
import {createStore} from 'redux'
import {render} from 'react-dom'

import reducer from './reducer'
import Root from './components/root'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  React.createElement(Root, {store}),
  document.getElementById('app')
)
