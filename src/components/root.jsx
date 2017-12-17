import React from 'react'
import {Provider} from 'react-redux'

import Counter from './counter'
import Message from './message'

export default function Root (props) {
  const {store} = props

  return <Provider store={store}>
    <Counter message='hey jortang' />
  </Provider>
}
