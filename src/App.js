import React, { Component, Fragment } from 'react';
import './App.css';
import Canvas from './canvas';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title" style={{ textAlign: 'center' }}>paintastik</h1>
        <div className="color-guide">
            <div className="user user">Utilisateur 1</div>
            <div className="user guest">Utilisateur 2</div>
          </div>
        <div className="main">
          <Canvas />
        </div>
      </Fragment>
    );
  }
}
export default App;