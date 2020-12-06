import React, { useState, useEffect } from 'react'
import '../css/navbar.css'

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Netflix-logo-print_pms.jpg/120px-Netflix-logo-print_pms.jpg" alt="Netflix Logo"/>

      <img className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png"
        alt="Netflix Logo"
        />
    </div>
  )
}

export default Navbar
