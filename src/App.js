import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state ={
    counter: 0,
    error: false
  }
  render(){  
    return (
    <div className="App">
      <div data-test="counter">
         the counter is {this.state.counter} <br/><br/>
         {this.state.error ? <span style={{color:'red', fontSize:'25px'}}>Counter Will not lessthan 0</span> : null}
      </div>
      <button  data-test="button" onClick={
        () => {
          if(this.state.counter === 0){
            this.setState({
              error: false
            })
          }
          this.setState({
            counter: this.state.counter+1
          })
        }
      }>++ Counter</button>
      <button  data-test="button" onClick={
        () => {
          if(this.state.counter){
            this.setState({
              counter: this.state.counter - 1
            })
          }
          else {
            this.setState({
              error: true
            })
          }
        }
      }>-- Counter</button>
    </div>
  );
}
}

export default App;
