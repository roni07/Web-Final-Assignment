import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import MainView from './MainView';

class App extends Component {
  render() {
    return (
      <div className="container my-3">
          <MainView />
      </div>
    );
  }
}

export default App;
