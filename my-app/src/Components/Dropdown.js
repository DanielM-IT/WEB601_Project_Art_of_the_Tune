import React from 'react';


export class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
	        <div className="button" onClick={this.showDropdownMenu}> My Account </div>

          { this.state.displayMenu ? (
          <ul>
    		   <li>My Account</li>
    		   <li>Upload Music</li>
    		   <li>My Music</li>
    		   <li>Log Out</li>
          </ul>
        ):
        (
          null
        )
        }

	      </div>

    );
  }


}


export default Dropdown;
