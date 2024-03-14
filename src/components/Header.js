import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import '../styles/Header.css';

const Header = () => {
    return (
      <div className='header-container'>
        <div className='text-container'>
          <h1>{'asdfg'}</h1>
        </div>
        <div className='darkmode-container'>
          <BsFillMoonStarsFill />
        </div>
      </div>
    )
}

export default Header;