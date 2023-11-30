
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {

  return (
   <nav className='nav'>
    <div className='nav__logo'>Logo</div>

    <div className='nav__options'>
        <ul>
            <li>
              <NavLink to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/login'}>
                Ingresa
              </NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}>
                Regístrate
              </NavLink>
            </li>

        </ul>
    </div>
   </nav>
  )
}
