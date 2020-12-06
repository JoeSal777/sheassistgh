import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.jpg';
import {FaAlignRight} from "react-icons/fa";
import {FiMail} from "react-icons/fi";


class Navbar extends Component {
    state={
        isOpen: false
    };
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    };
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">

                        {/* For logo */}
                        <Link to="/">
                            <img src={logo} alt="Joseph Larkai Logo" />
                        </Link>

                        {/* For contact-me icon in mobile view */}
                        <Link to="/contact" className="nav-btn-small-screen">
                            <button type="button">
                                <FiMail className="Nav-icon" />   
                            </button>
                        </Link>

                        {/* For menu icon in mobile view */}
                        <button type="button" className="nav-btn-small-screen" onClick={this.handleToggle}>
                            <FaAlignRight className="Nav-icon" />   
                        </button> 
                    </div>

                    {/* For nav menu */}
                    <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/resume">Resume.</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects.</Link>
                        </li>
                    </ul>

                    {/* For contact me icon in nav-bar */}
                    <Link to="/contact" className="nav-btn-big-screen">
                        <button type="button">
                            <FiMail className="Nav-icon" />   
                        </button>
                    </Link>

                </div>
            </nav>
        );
    }
}

export default Navbar;