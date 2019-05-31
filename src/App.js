import React, { Component } from 'react';
import Search from './components/search';
import Table from './components/tabla';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Search/>
          <Table/>
        </div>
      </div>
    )
  };
}

export default App;
