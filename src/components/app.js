import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*React simple starter*/}
          {this.props.children}
      </div>
        //Through this.props.children, App renders children components, in this case
        //Greeting which is a route in routes.js
    );
  }
}
