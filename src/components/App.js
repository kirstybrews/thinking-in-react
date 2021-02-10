import React, { Component } from 'react'

//Components
import { Navbar } from './Navbar'
import { About } from './About'
import StudentContainer from './StudentContainer'
import Search from './Search'
import {Houses} from './Houses'
import {LeadHouse} from './LeadHouse'


const URL = "http://localhost:3000/wizards"

export default class App extends Component {

  state = {
    show: "about",
    wizards: [],
    crew: [],
    searchText: "",
    filteredWizards: [],
    sort: false,
    houses: {},
    leadHouse: []
  }

  componentDidMount = async () => {
    const response = await fetch(URL)
    const wizards = await response.json()
    this.setState({ wizards })
  }

  showContainer = () => this.setState({show: "index"})
  showAbout = () => this.setState({show: "about"})
  showSearch = () => this.setState({show: "search"})
  showHouses = () => {
    const houses = {}
    const alterWizards = this.state.wizards
    alterWizards.forEach(wizard => houses[wizard.house] ? houses[wizard.house] += wizard.points : houses[wizard.house] = wizard.points)
    this.setState({
      show: "houses",
      houses: houses,
      leadHouse: Object.keys(houses).reduce((a, b) => houses[b] > houses[a] ? [b, houses[b]] : [a, houses[a]])
    })
    
  }
  showLeadHouse = () => {
    const houses = {}
    const alterWizards = this.state.wizards
    alterWizards.forEach(wizard => houses[wizard.house] ? houses[wizard.house] += wizard.points : houses[wizard.house] = wizard.points)
    this.setState({
      show: "lead house",
      houses: houses,
      leadHouse: Object.keys(houses).reduce((a, b) => houses[b] > houses[a] ? [b, houses[b]] : [a, houses[a]])
    })
  }

  searchHandler = (searchText) => {
    this.setState({ searchText })
  }

 addToCrew = (wizard) => {
   this.setState({
     crew: [...this.state.crew, wizard]
   })
 }

 handleFilter = (e) => {
  this.setState({
    filteredWizards: this.state.wizards.filter(wizard => wizard.house === e.target.value)
  })
 }

 removeFromCrew = (wizard) => {
   let newCrew = this.state.crew.filter(wiz => wiz.id !== wizard.id)
   this.setState({
     crew: newCrew
   })
 }

 createAWizard = (wizard) => this.setState({wizards: [...this.state.wizards, wizard]})

 addHousePoints = (updatedWizard) => {
  this.setState({
    wizards: this.state.wizards.map(wizard => wizard.id === updatedWizard.id ? updatedWizard : wizard)
  })
  this.returnWizards()
 }

 handleSort = () => {
   this.setState({
     sort: !this.state.sort
   })
 }

 returnWizards = () => {
   let returnedWizards = this.state.wizards

   if (this.state.filteredWizards.length > 0) {
     returnedWizards = this.state.filteredWizards
     console.log(returnedWizards)
   }

   if (this.state.sort) {
     returnedWizards.sort((a, b) => b.points - a.points)
     console.log(returnedWizards)
   }
   console.log(returnedWizards)
   return returnedWizards
 }

  render() {
    return (
      <>
        <Navbar showLeadHouse={this.showLeadHouse} showAbout={this.showAbout} showHouses={this.showHouses}/>
        {this.state.show === "about" ? <About showSearch={this.showSearch} showContainer={this.showContainer} /> : null}
        {this.state.show === "index" ? 
        <StudentContainer 
          crew={this.state.crew} 
          addToCrew={this.addToCrew}
          removeFromCrew={this.removeFromCrew}
          wizardsData={this.returnWizards()} 
          handleFilter={this.handleFilter}
          addHousePoints={this.addHousePoints}
          sort={this.state.sort}
          handleSort={this.handleSort}/> : null}
          
        {this.state.show === "search" ? 
        <Search
          createAWizard={this.createAWizard} 
          searchText={this.state.searchText} 
          wizardsData={this.state.wizards} 
          searchHandler={this.searchHandler} /> : null}

          {this.state.show === "houses" ?
          <Houses houses={this.state.houses}/> : null}

          {this.state.show === "lead house" ?
          <LeadHouse leadHouse={this.state.leadHouse}/> : null}
      </>
    )
  }
}
