import { Link } from "react-router-dom";

const Btn1 = ( { titulo='Titulo', subtitulo='Subtitulo', icono='fas fa-shopping-cart', ruta='/', leyenda='Ir a ...', bg='small-box bg-info' } ) => {
  return (
    <>
      <div className={ bg }>
        <div className="inner">
          <h3>{ titulo }</h3>
          <p>{ subtitulo }</p>
        </div>
        <div className="icon">
          <i className={ icono }></i>
        </div>
        <Link to={ ruta } className="small-box-footer" >
          { leyenda } <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </>
  );
}

export default Btn1;