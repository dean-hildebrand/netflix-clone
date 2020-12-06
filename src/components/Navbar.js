import React, { useEffect } from 'react'
import '../css/navbar.css'

function Navbar() {
  const []

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div className="nav">
      <img className="nav__logo"src="https://upload.wikimedia.org/wikipedia/commoms/0/0f/" alt="Netflix Logo"/>

      <img className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Logo"
        />
    </div>
  )
}

export default Navbar
