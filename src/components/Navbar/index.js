import React, { Component } from 'react';

import NavbarMenuList from '../NavbarMenuList';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: [
        { text: 'Home', href: '/' },
        { text: 'New Pet', href: '/new-pet' },
      ],
    };
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">PET ADOPT STORE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarMenuList list={this.state.menu} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
