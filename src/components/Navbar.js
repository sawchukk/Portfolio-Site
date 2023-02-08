import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';

const Menu = () => (
  <>
  <p><a href="#about-me">About Me</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#connect">Connect</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='web_navbar'>
      <div className='web_navbar-links'>
        <div className='web_navbar-links_logo'>
           <img src={logo} alt="logo" />
        </div>
        <div className='web_navbar-links_container'>
          <Menu />
        </div>

      </div>
      <div className='web_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='web_navbar-menu_container'>
            <div className='web_navbar-menu_container-links'>
              <Menu />
              <div className='web_navbar-menu-containers-links-sign'>
                <button type= "button"> i dont understand </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>

  )
}


export default Navbar