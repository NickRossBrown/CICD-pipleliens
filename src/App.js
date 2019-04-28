import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list';
import { buddies } from './Lists/buddies';
import SearchBox from'./components/SearchBox';
import Scroll from './components/Scroll'

class App extends Component {

    constructor() {
      super()
      this.state = {
        buddies: [],
        searchField: ''
      }
    }

    componentDidMount() {
      this.setState({ buddies: buddies })
    }

    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value })
      const filerBuddies = this.state.buddies.filter( buddies => {
        return buddies.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      console.log( filerBuddies )
    }

    render() {
      const filerBuddies = this.state.buddies.filter( buddies => {
        return buddies.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })

      return (
      <div>
        <div>
          <h1>Friends List</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <CardList buddies={ filerBuddies }></CardList>
          </Scroll>
          
        </div>
        {/* <CardList robots={robots}></CardList> */}
        </div>
      )
    }
}

export default App;
