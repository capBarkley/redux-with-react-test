import React from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="counter">COUNT: <span>{this.props.count}</span></div>
        <button onClick={this.props.onUp}>UP</button>
        <button onClick={this.props.onDown}>DOWN</button><br/>
        <button onClick={this.props.clear}>CLEAR</button>
        <button onClick={this.props.reset}>RESET</button>
        <hr/>
        <div className="history">
          <span>History</span>
          <ul className="historyList">
            {
              this.props.history.map(el => (
                <li
                  key={el.id}
                  onClick={() => {this.props.onDel(el.id)}}>
                  {el.count}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => dispatch({type: 'UP', value: 1}),
    onDown: () => dispatch({type: 'DOWN', value: 1}),
    clear: () => dispatch({type: 'CLEAR'}),
    onDel: (id) => dispatch({type: 'DEL', key: id}),
    reset: () => dispatch({type: 'RESET'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
