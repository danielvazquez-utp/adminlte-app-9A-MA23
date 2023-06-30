import { Link } from 'react-router-dom';
import Btn1 from '../botones/Btn1';
import Header from '../Header';
import Footer from '../Footer';

const MenuCategorias = () => {
  return (
    <>
      <Header />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Menú de Categorías</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                    <li className="breadcrumb-item active">Categorías</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="row">
              
              <div className="col-xs-12 col-md-6">
                <Btn1
                  titulo="Agregar"
                  subtitulo="Agregar nueva categoría"
                  ruta="/addCategoria"
                  leyenda="Ir a agregar Categoría"
                  bg="small-box bg-warning"
                  icono='fas fa-folder-plus'
                />
              </div>

              <div className="col-xs-12 col-md-6">
                <Btn1
                  titulo="Categorías registradas"
                  subtitulo="Consultar las categoría registradas"
                  ruta="/getCategorias"
                  leyenda="Ir a consultar Categoría"
                  bg="small-box bg-warning"
                  icono='fas fa-search'
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MenuCategorias;   