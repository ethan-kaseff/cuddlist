import React from 'react'

function Footer() {
  return (
    <div className='w-full h-12 bg-blue-300 text-white flex justify-center -mt-12 absolute bottom-0'>
      <a href="https://github.com/ethan-kaseff" className="href m-3">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/ethankaseff/" className="href m-3">
        <i className="fab fa-linkedin-in fa-2x"></i>
      </a>
    </div>
  )
}

export default Footer
