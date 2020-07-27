import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends Component{
  constructor(){
    super()


//set state
    this.state = {
      monsters: [],
      searchField: ''
    };
    
//so handleChange understands what this is referring to
    this.handleChange=this.handleChange.bind(this)
  }


//get list of monsters from API
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}


handleChange(e) {
  this.setState({searchField: e.target.value})
}

  render(){
    
    //destructure: pulling values from state object
    const { monsters, searchField } = this.state
    
    // could also be written as:

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField
  
    
const filteredMonsters = monsters.filter(monster => 
  monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

    return (
      <div className="App">
        
<h1>React Rolodex</h1>
      <SearchBox
      placeholder='search employees'
      handleChange ={this.handleChange}
      />
    
    {/* pass array of monsters to the cardList component  */}
        <CardList monsters = {filteredMonsters}/>
      </div>
          );
        }

}

export default App;
