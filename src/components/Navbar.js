import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">

                {/* This is for the logo, bootstrap is mainly used to handle styling */}
                <Link to='/'>
                    <img src={logo} alt='Store' className='Navbar-brand'/>
                </Link>
                
                {/* This Shows The 'product' text in the Nav Bar */}
                <ul className="navbar-nav align-items-center">
                    
                    <li className="navbar-item ml-5">
                        <Link to="/contact" className="nav-link">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* This is for the cart */}
                <Link to="/cart" className="ml-auto cart-button">
                    <ButtonContainer Navbarcart >
                        <span className='mr-2'>
                            <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
            
        );
    }
}

// styling for Nav Bar using styled components
const NavWrapper = styled.nav`
background: var(--gemeraldBlack);
.nav-link{
    color:var(--mainWhite) !important;
    font-size: 1rem;
    text-transform: capitalize !important;
}
`

export default Navbar;