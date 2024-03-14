import React from 'react'
import '../styles/Content.css';
import imageSrc from '../01.jpg'

const Content = () => {
    return (
      <div className='content-container'>
        <div className='main-content'>
          <h1 className='header'>Name Herere</h1>
          <p className='intro-container'>
            This is a introduction paragraph which should contains personal
            information and background. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil iure dolor expedita veniam excepturi
            adipisci sint dolorum possimus quidem aliquid rem nisi perspiciatis,
            sequi hic debitis amet consequatur minima vero.
          </p>

          <div className='image-container'>
            <img src={imageSrc} alt='hey' />
            <div className='socials-container'>socials and email</div>
          </div>
        </div>
        <div className = "experiences-container">lore</div>
      </div>
    )
}

export default Content;