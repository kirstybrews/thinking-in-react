import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (

            <label className="pl-md-0 p-3 navbar-brand">
                Filter By House:
                <select onChange={this.props.handleFilter}>
                    <option>Gryffindor</option>
                    <option>Hufflepuff</option>
                    <option>Ravenclaw</option>
                    <option>Slytherin</option>
                </select>
            </label>
        )
    }
}