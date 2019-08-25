import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {BtnContainer} from './Buttons'
import styled from 'styled-components'
import Dropdown from './Dropdown';



export default class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar">
                <div>
                <Link to='/'>
                    <img src='../../icons/musical-notes-symbols.png' alt="musicSite" className="navbar-logo"/>
                </Link>
                </div>
                
                <ul className="navbar-item">
                    <li>
                        <Link to="/MyAccount" className="navbar-link">
                            <Dropdown />
                        </Link>  
                    </li>  
                    <li>   
                        <Link to="/Support" className="navbar-link">
                            Support
                        </Link>
                    </li>  
                    <li>
                        <Link to="/BrowseMusic" className="navbar-link">
                            Browse Music
                        </Link>
                    </li> 
                </ul> 
               
                <Link to="/Login" style={{float: 'right'}}>
                    <BtnContainer>
                        <span>Login</span>
                    </BtnContainer>
                </Link>
                <Link to="/SignUp" style={{float: 'right'}}>
                    <BtnContainer>
                        <span>SignUp</span>
                    </BtnContainer>
                </Link>   
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: #232528;
`