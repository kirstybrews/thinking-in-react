import React from 'react'

export const About = ({ showContainer, showSearch }) => {
    return (
          <div className="jumbotron bg-secondary text-center text-danger mb-0 radius-0">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">Hogwartsr</h1>
                    <span className="lead">A cool app to see cool harry potter things</span>
        
                    <div className="mt-4">
                        <a href="#!" className="btn btn-danger btn-lg m-2 text-secondary">
                            <span onClick={showContainer}>Make a Crew</span>
                        </a>
        
                        <a href="#!" className="btn btn-danger text-secondary btn-lg m-2">
                            <span onClick={showSearch}>Add Yourself</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
