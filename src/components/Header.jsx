import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <>
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
            <Link to="/" className="navbar-brand">
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Agregar alumno</Link>
                </li>
                <li className="nav-item">
                    <Link to="/edit" className="nav-link">Editar alumno</Link>
                </li>
                </ul>

                
            </div>

            </div>
        </nav>
    </>
  )
}

export default Header;