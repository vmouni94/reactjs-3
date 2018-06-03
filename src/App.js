import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      shouldRenderTitle : true
    };

  }

  renderTitle(){
    if(!this.state.shouldRenderTitle){
      return null;
    }
    return <h1> Title </h1>;
  }
  render() {
      return (
      <div className="App">
      {
        this.state.shouldRenderTitle
          ? <h1> Title </h1>
          : null
      }
      </div>
    );
  }
}

export default App;
