import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list';
import SearchBox from'./components/SearchBox';
import Scroll from './components/Scroll'
import { members } from './MemberData/members'

class App extends Component {

    constructor() {
      super()
      this.state = {
        members: [],
        searchField: ''
      }
    }

    componentDidMount() {
      this.setState({ members: members })
    }

    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value })
      const filerMembers = this.state.members.filter( members => {
        return members.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      console.log( filerMembers )
    }

    render() {
      const filerMembers = this.state.members.filter( members => {
        return members.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })

      return (
      <div>
        <div>
          <h1 className="washed-blue">Members List</h1>
          <SearchBox className="flex items-center"searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <CardList members={ filerMembers }></CardList>
          </Scroll>
          
         </div>
        </div>
      )
    }
}

export default App;
