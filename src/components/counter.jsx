import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {count: 0}

    this.onClick = () => {
      this.setState({count: this.state.count + 1})
    }
  }

  render () {
    const {count} = this.state

    return <div>
      <div>You've pressed the button {count} time(s).</div>

      <button onClick={this.onClick}>Press me</button>
    </div>
  }
}
