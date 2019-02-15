import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className='ui secondary pointing menu'>
        <Link to='/' className='item'>Streaming</Link>
        <nav className='right menu'>
          <Link to='/streams/list' className='item'>All Stream</Link>
          <GoogleAuth />
        </nav>
      
    </header>
  );
}

export default Header;
