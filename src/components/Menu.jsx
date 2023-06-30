import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Btn1 from './botones/Btn1';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <>
      <Header />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  
                  Menú principal
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to='/'>Inicio</Link>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <a href="#">Layout</a>
                  </li>
                  <li className="breadcrumb-item active">Top Navigation</li> */}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            
            <div className='row'>
                <div className='col-xs-12 col-md-6 col-lg-4'>
                    <Btn1 titulo='Productos' subtitulo='Gestión de productos'  />
                </div>
                <div className='col-xs-12 col-md-6 col-lg-4'>
                    <Btn1 titulo='Categorias' subtitulo='Gestión de categorías' ruta='/mCategorias' leyenda='Ir a Categorías' bg='small-box bg-warning' />
                </div>
                <div className='col-xs-12 col-md-6 col-lg-4'>
                    <Btn1 titulo='Entradas y Salidas' icono='fas fa-truck-loading' leyenda='Ir a Entradas y Salidas ' />
                </div>
                <div className='col-xs-12 col-md-6 col-lg-4'>
                    <Btn1 titulo='Usuarios' />
                </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Menu;