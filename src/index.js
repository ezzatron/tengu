import '@babel/polyfill'

import domready from 'domready'
import {createStore} from 'redux'
import {render} from 'react-dom'

import reducer from './reducer'
import Root from './components/root'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

domready(() => {
  const container = document.createElement('span')
  document.body.appendChild(container)
  render(Root({store}), container)
})
