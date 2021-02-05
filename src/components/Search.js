import React, { Component } from 'react'

//Components
import Form from './AddWizardForm'
import { StudentCard } from './StudentCard'

export default class Search extends Component {

    filteredStudents = () => {
        const filteredStudents = this.props.wizardsData.filter(
                wiz => wiz.name.toLowerCase().includes(this.props.searchText.toLowerCase())
            )
            return filteredStudents
    }

    render() {
   
        return (
            <div className="container mt-5">
                < Form createAWizard={this.props.createAWizard} />
                <form>
                    <div className="form-group">
                        <label htmlFor="search-text">Search by House:</label>
                        <input onChange={(e) => this.props.searchHandler(e.target.value)} type="text" className="form-control" id="search-text" placeholder="gryffindor sucks"/>
                    </div>
                </form>
                <div className="row justify-content-md-center">
                    {this.filteredStudents().map(wiz => <StudentCard key={wiz.id} wizard={wiz} />)}
                </div>
            </div>
        )
    }
}
