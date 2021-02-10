import React from 'react'
import AddHousePoints from "./AddHousePoints"

export const StudentCard = ({ addHousePoints, wizard, clickAction }) => {
    return (
        <div className="col-sm-3 mb-1">
            <div className="card text-center">
                <img src={wizard.image} onClick={() => clickAction(wizard)} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{wizard.name}</h5>
                    <p className="card-text"></p>
                </div>
                <AddHousePoints addHousePoints={addHousePoints} wizard={wizard}/>
                <div className="card-footer">
                    <small className="text-muted">House Points: {wizard.points}</small>
                </div>
            </div>
        </div>
    )
}
