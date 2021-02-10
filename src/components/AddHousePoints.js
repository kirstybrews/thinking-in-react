import React from 'react';
const URL = "http://localhost:3000/wizards/";

export default class AddHousePoints extends React.Component {

    state = {
        points: 0
    }

    handleChange = (e) => {
        this.setState({
            points: (+e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let updatedWizard = {
            points: this.props.wizard.points + this.state.points
        }

        let reqPack = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(updatedWizard)
        }


        fetch(URL + this.props.wizard.id, reqPack)
            .then(r => r.json())
            .then(updatedWizard => {
                this.props.addHousePoints(updatedWizard)
                e.target.reset()
            })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="number" style={{ width: "50%" }} onChange={this.handleChange}/>
                <input type="submit" style={{ height: '30px', width: '100%', fontSize: '13px' }} value="Add House Points" />
            </form>
        )
    }
}