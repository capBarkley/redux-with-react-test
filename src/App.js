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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => dispatch({type: 'UP', value: 1}),
    onDown: () => dispatch({type: 'DOWN', value: 1}),
    clear: () => dispatch({type: 'CLEAR'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
