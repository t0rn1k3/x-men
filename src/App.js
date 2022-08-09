import React from "react";
import CardCont from "./components/CardCont.js";
import Search from './components/Search.js';

import "./App.css";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      heroes: [],
      searchBar: ''
  }
  }

  componentDidMount(){
    fetch('https://xmenapiheroku.herokuapp.com/api/characters')
    .then(resp => resp.json())
    .then(characters => this.setState({ heroes: characters.results }))
  }

  render(){
    const { heroes, searchBar } = this.state;
    const filterHeroes = heroes.filter(hero => 
        hero.name.toLowerCase().includes(searchBar.toLowerCase())
      )
    return(
      <div className="app">
        <h1>X-MEN</h1>
        <Search
          placeholder='search x-men'
          handleChange= {e => {this.setState({ searchBar : e.target.value})}}
         />
        <CardCont heroes = {filterHeroes}/>
      </div>
    )
  }

}

export default App;
