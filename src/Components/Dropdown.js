import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Dropdown extends Component {

  constructor(){
    super()

    this.state = {
          displayMenu: false,
        }

      this.showDropdownMenu = this.showDropdownMenu.bind(this)
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  };

  showDropdownMenu(event) {
      event.preventDefault()
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('MouseHover', this.hideDropdownMenu)
      })
    }

    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('MouseHover', this.hideDropdownMenu)
      })
    }

    render() {
      return (
          <div className= "dropdown">
            <div  className="dropdownButton" onMouseEnter={this.showDropdownMenu} onMouseLeave={this.hideDropdownMenu} >
              User Account
          
          
            { this.state.displayMenu ? (
              <ul>
                <li>
                  <Link to="" className="navbar-link">
                    Log Out
                  </Link>
                </li>
                <li>
                  <Link to="/MyMusic" className="navbar-link">
                    My Music
                  </Link>
                </li> 
                <li>
                  <Link to="/UploadMusic" className="navbar-link">
                    Upload Music
                  </Link>
                </li>                
                <li>
                  <Link to="/MyAccount" className="navbar-link">
                    My Account
                  </Link>
                </li>
              </ul>
          ):
          (
            null
          )
          }
          </div>
        </div>
      );
    }
}

