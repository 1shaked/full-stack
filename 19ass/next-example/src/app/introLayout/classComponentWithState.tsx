'use client'
import React from "react";

class CountComponent extends React.Component {
    state: { count : number};
    constructor(props: {}) {
      super(props);
      this.state = {count: 0};
    }
    increment() {
        debugger;
        console.log(this)
        console.log(this.state)
        this.setState({count: this.state.count + 1});
    }
    render() {
      return <div>
        <h2>Count is = {this.state.count} </h2>
        <button onClick={this.increment}>+1</button>
    </div>;
    }
  }

  export default CountComponent;