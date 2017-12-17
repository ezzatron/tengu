import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Message from './components/message'

ReactDOM.render(<Message message='hey jortron' />, document.getElementById('app'))
