export function bindInputChange (actionCreator) {
  return function onChange (event) {
    return actionCreator(event.target.value)
  }
}
