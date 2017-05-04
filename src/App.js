import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import MatchList from './components/match_list';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <MatchList />
      </div>
    );
  }
}

export default App;
