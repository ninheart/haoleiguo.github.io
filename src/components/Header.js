import React from 'react';
import { GoogleLogin } from "@react-oauth/google"
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'

import {useTheme} from './ThemeContext';

import '../styles/Header.css';

const CLIENT_ID = '592724500396-vgareg91v7f2jahl350fu4c1k74uhsv6.apps.googleusercontent.com';


const Header = ({ setIsLoggedIn }) => {

  const {darkMode, toggleDarkMode} = useTheme();

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className={'header-container'}>
        <div className='signin-container'>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              localStorage.setItem('isLoggedIn', 'true')
              setIsLoggedIn(true)
            }}
            onError={() => {
              console.log('login failed')
            }}
            clientId={CLIENT_ID}
          />
        </div>
        <div className='darkmode-container'>
          {darkMode ? (
            <BsSun color='white' size={20} onClick={toggleDarkMode} />
          ) : (
            <BsFillMoonStarsFill size={20} onClick={toggleDarkMode} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;