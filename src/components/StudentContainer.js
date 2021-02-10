import React, { Component } from 'react'

//Components
import { StudentCard } from './StudentCard'
import CrewContainer from './CrewContainer'
import Filter from './Filter'

export default class StudentContainer extends Component {
    render() {
        return (
            <div className="container m-3">
                <CrewContainer clickAction={this.props.removeFromCrew} crew={this.props.crew} />
                <Filter handleFilter={this.props.handleFilter} />
                <strong>Sort by House Points: </strong>
                <label>
                    <input type="radio" value="sort" checked={this.props.sort} onChange={() => this.props.handleSort()} />
                </label>
                <div className="row justify-content-md-center">
                    {this.props.wizardsData.map(
                        wiz => <StudentCard addHousePoints={this.props.addHousePoints} clickAction={this.props.addToCrew} key={wiz.id} wizard={wiz} />
                    )}
                </div>
            </div>
        )
    }
}
