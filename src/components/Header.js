import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import '../styles/Header.css';

const Header = () => {
    return (
      <div className='header-container'>
        <div className = "signin-container">
          <GoogleLogin onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
          }}
          onError={()=>{
            console.log("login failed");
          }}
          />
        </div>
        <div className='darkmode-container'>
          <BsFillMoonStarsFill />
        </div>
      </div>
    )
}

export default Header;