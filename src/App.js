import React, { Component } from 'react';
import Search from './components/search';
import Table from './components/tabla';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      result : []
    }
  }

  OnChangeSearchTitle(NewResult) {
    this.setState({
      result : NewResult
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <Search changeResult={this.OnChangeSearchTitle.bind(this)}/>
          <Table NewResult={this.state.result} />
        </div>
      </div>
    )
  };
}

export default App;
