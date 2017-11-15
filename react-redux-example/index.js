import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    // 这里相当于
    // const value = this.props.value;
    // const onIncreaseClick = this.props.onIncreaseClick;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
// state = {count: 0}  这里是默认值
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
// createStore中传入reducer
const store = createStore(counter)

// Map Redux state to component props
// 将state中的值直接映射到props中，相当于给view了
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
// 相当于ui操作action
// () => dispatch(increaseAction)  这里这么写，
// 是onIncreaseClick执行的时候，执行的是dispatch(increaseAction)
// 而不是dispatch(increaseAction)运行的返回结果
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
// 前者负责输入逻辑，即将state映射到 UI 组件的参数（props）
// 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  // Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
  // 帮助所有的子组件拿到store，从而通过store.getState方法拿到state
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
