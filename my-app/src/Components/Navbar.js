import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../icons/musical-notes-symbols.png'
import {BtnContainer} from './Buttons'
import styled from 'styled-components'



export default class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar">
                <div className="navbar-icon">
                <Link to='/'>
                    <img src={logo} alt="musicSite" className="navbar-logo"/>
                </Link>
                </div>
                
                <ul className="nav-item">
                    <li className="nav-item">
                        <Link to="/BrowseMusic" className="nav-link">
                            Browse Music
                        </Link>
                        <Link to="/Support" className="nav-link">
                            Support
                        </Link>
                    </li>
                </ul>
                <Link to="/Login">
                <BtnContainer>
                        <span>Login</span>
                    </BtnContainer>
                </Link>
                <Link to="/SignUp">
                <BtnContainer>
                        <span>SignUp</span>
                    </BtnContainer>
                </Link>   
                <Link to="/MyAccount">
                    <BtnContainer>
                        <span>My Account</span>
                    </BtnContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: #232528;
    .nav-link{
        padding-left: 20px;
        padding-right: 20px;
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`