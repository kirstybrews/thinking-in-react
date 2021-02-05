import React, { Component } from 'react'

//Components
import { Navbar } from './Navbar'
import { About } from './About'
import StudentContainer from './StudentContainer'
import Search from './Search'


const URL = "http://localhost:3000/wizards"

export default class App extends Component {

  state = {
    show: "about",
    wizards: [],
    crew: [],
    searchText: ""
  }

  componentDidMount = async () => {
    const response = await fetch(URL)
    const wizards = await response.json()
    this.setState({ wizards })
  }

  showContainer = () => this.setState({show: "index"})
  showAbout = () => this.setState({show: "about"})
  showSearch = () => this.setState({show: "search"})

  searchHandler = (searchText) => {
    this.setState({ searchText })
  }

 addToCrew = (wizard) => {
   this.setState({
     crew: [...this.state.crew, wizard]
   })
 }

 removeFromCrew = (wizard) => {
   let newCrew = this.state.crew.filter(wiz => wiz.id !== wizard.id)
   this.setState({
     crew: newCrew
   })
 }

 createAWizard = (wizard) => this.setState({wizards: [...this.state.wizards, wizard]})

  render() {
    return (
      <>
        <Navbar showAbout={this.showAbout} />
        {this.state.show === "about" ? <About showSearch={this.showSearch} showContainer={this.showContainer} /> : null}
        {this.state.show === "index" ? 
        <StudentContainer 
          crew={this.state.crew} 
          addToCrew={this.addToCrew}
          removeFromCrew={this.removeFromCrew}
          wizardsData={this.state.wizards} /> : null}
        {this.state.show === "search" ? 
        <Search
          createAWizard={this.createAWizard} 
          searchText={this.state.searchText} 
          wizardsData={this.state.wizards} 
          searchHandler={this.searchHandler} /> : null}
      </>
    )
  }
}
