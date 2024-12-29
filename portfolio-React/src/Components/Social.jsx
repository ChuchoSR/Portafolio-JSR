import React from 'react'
import github from '../assets/image/github.png'
import linkedin from '../assets/image/linkedin.png'

const Social = () => {
    return (
        <div className='social-medias'>
            <a href="https://github.com/ChuchoSR" target="_blank" rel="noopener noreferrer">
                <img 
                    src={github} 
                    alt="my-github"
                    className='social-icon'
                />
            </a>
            <a href="https://www.linkedin.com/in/jesus-sierra-729356135/" target="_blank" rel="noopener noreferrer">
                <img 
                    src={linkedin} 
                    alt="my-linkedin"
                    className='social-icon'
                />
            </a>
        </div>
    )
}

export default Social