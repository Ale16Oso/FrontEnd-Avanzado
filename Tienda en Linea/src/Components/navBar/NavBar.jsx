import React from 'react'
import './NavBar.scss'

export default function NavBar() {
  return (
    <nav className='nav'>
        <div className='nav__logo'>Logo</div>

        <div clasName='nav_options'>
            <ul>
                <li>Home</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </div>
    </nav>
  )
}
