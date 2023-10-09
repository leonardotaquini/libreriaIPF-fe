import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    
  const toggleTheme = () => {
   theme === 'dark' 
    ? setTheme('light')
    : setTheme('dark');
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            Libreria IPF
          </Link>
          <button
            className="navbar-toggler hmbr"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">
                  Libros
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/libro/registro' className="nav-link">
                  Crear Libros
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ toggleTheme }>
                  {
                    theme === 'dark'
                    ? <MdOutlineDarkMode/>
                    : <BsSun className="text-warning"/>
                  }
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
