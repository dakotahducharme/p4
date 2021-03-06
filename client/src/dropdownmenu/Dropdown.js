import React from 'react';
import './style.css';


class Dropdown extends React.Component {
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
    const { navigate } = this.props;
    return (
        <div  className="dropdown" style = {{width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Account </div>

          { this.state.displayMenu ? (
            <ul>
              <li onClick={() => navigate('login')}><a href="#">sign in</a></li>
              <li onClick={() => navigate('signup')}><a href="#">sign up</a></li>
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
