import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';


class App extends Component{
  constructor(){
    super()


//set state
    this.state = {
      monsters: [],
      searchField: ''
    };
  }


//get list of monsters from API
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}



  render(){
    
    //destructure: pulling values from state object
    const { monsters, searchField } = this.state
    
    // could also be written as:

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField
    
const filteredMonsters = monsters.filter(monster => 
  monster.name.toLowerCase().includes(searchField.toLowerCase())
  )

    return (
      <div className="App">
        <input type = 'search' placeholder='search monsters' 
        onChange={e => this.setState({ searchField: e.target.value })
      
      }/>
    {/* pass array of monsters to the cardList component  */}
        <CardList monsters = {filteredMonsters}/>
      </div>
          );
        }

}

export default App;
