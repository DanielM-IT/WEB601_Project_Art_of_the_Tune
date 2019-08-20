import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../icons/musical-notes-symbols.png'
import styled from 'styled-components'




export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="navbar-icon">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-logo"/>
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
                
  
            </nav>
        )
    }
}

const BtnContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--mainYellow);
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem;
    float: right;
`