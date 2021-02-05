import React from 'react'

export const StudentCard = ({ wizard, clickAction }) => {
    return (
        <div className="col-sm-3 mb-1">
            <div onClick={() => clickAction(wizard)}className="card text-center">
                <img src={wizard.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{wizard.name}</h5>
                    <p className="card-text"></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">House Points: {wizard.points}</small>
                </div>
            </div>
        </div>
    )
}
