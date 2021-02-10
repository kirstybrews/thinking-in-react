import React from 'react'

export const Navbar = ({ showAbout, showHouses, showLeadHouse }) => {
    return (
        <div className="bg-danger navbar-dark text-white">
            <div className="container">
                <nav className="navbar px-0 navbar-expand-sm navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a onClick={showAbout} href="#!" className="pl-md-0 p-3 text-white navbar-brand">Home</a>
                            <a onClick={showHouses} href="#!" className="p-3 text-decoration-none text-white">Houses</a>
                            <a onClick={showLeadHouse} href="#!" className="p-3 text-decoration-none text-white">Leading House</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
