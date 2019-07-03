import React, { useState } from 'react';

import NavbarMenuList from '../NavbarMenuList';
import SearchInput from '../SearchInput'

const INITIAL_MENU = [
        { text: 'Home', href: '/' },
        { text: 'New Pet', href: '/new-pet' },
        {text:'Dropdown', options :[{text:'test1', href: '/test1'}]}
      ]

function Navbar(){
const [state] = useState(INITIAL_MENU)
  return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">PET ADOPT STORE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarMenuList list={state} />
          <SearchInput />
        </div>
      </nav>
    );
}


export default Navbar;
