import React from 'react'
import {Provider} from 'react-redux'

import Tension from './tension'

export default function Root (props) {
  const {store} = props

  return <Provider store={store}>
    <Tension />
  </Provider>
}
