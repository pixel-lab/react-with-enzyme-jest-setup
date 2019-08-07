import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state ={
    counter: 0
  }
  render(){  
    return (
    <div className="App">
      <div data-test="counter">
         the counter is {this.state.counter}
      </div>
      <button  data-test="button" onClick={
        () => {
          this.setState({
            counter: this.state.counter+1
          })
        }
      }>Update Counter</button>
    </div>
  );
}
}

export default App;
