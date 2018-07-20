import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// import { robots } from './robots';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestUsers.users,
    isPendning: state.requestUsers.isPendning,
    error: state.requestUsers.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: (requestUsers) => dispatch(requestUsers)
  }
}

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    console.log(this.props.store)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }
 
  render() {
    const { robots} = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      // returns all names that include search field
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ?
      <h1>Loading...</h1> : 
      (
        <div className="tc">
          <h1 className="f1">Robo Homies</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />              
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
