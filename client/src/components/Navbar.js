import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render(){
        const style = {
            justifyContent: "space-between"
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={style} className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">
                                Visualization
                            </Link>
                        </div>
                        <div className="right-sided-links">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item nav-link">
                                    <Link to="/allocation">Allocation</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/aggregate">Aggregate</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/map">Map</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        )
    }
}

export default Navbar;