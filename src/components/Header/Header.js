import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
  const history = useHistory();
  return(
    <div className='header'>
      <button 
        className='header_logo_container'
        onClick={() => history.push('/')
        }>
      <Crown className='logo'/>
      </button>
      <div className='header_options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
      </div>

    </div>
  )
}

export default Header;