import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      // returns all names that include search field
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);

    return (
      <div className="tc">
        <h1 className="f1">Robo Homies </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
