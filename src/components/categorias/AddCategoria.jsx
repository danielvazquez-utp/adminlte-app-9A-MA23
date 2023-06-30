import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";

const AddCategoria = () => {

    const [nombre, setNombre] = useState('');
    const [activo, setActivo] = useState(1);

    const handleAdd = () => {
        console.log(nombre, activo);
        var formdata = new FormData();
        formdata.append("nombre", nombre);
        formdata.append("fecha", "2023-06-27 10:00:00");
        formdata.append("activo", activo);

        var requestOptions = {
            mode: 'no-cors',
            header: {
                'Content-Type' : 'application/json; charset=UTF-8'
            },
            method: 'POST',
            body: formdata,
            };

        fetch("http://localhost:8080/dwi-9a/index.php/Api/Categorias/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

  return (
    <>
        <Header />

        <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Agregar categoría</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                    <li className="breadcrumb-item">
                        <Link to="/mCategorias">
                        Categorías
                        </Link>
                        </li>
                    <li className="breadcrumb-item active">Agregar</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            
            <div className="card card-warning">
                <div className="card-header">
                    <h4 className="card-title">
                        Agregar categoría
                    </h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Nombre de la categoría</label>
                        <input
                            type='text'
                            className="form-control"
                            placeholder="Escriba aquí"
                            value={ nombre }
                            onChange={ event => setNombre( event.target.value ) }
                        />
                    </div>
                    <div>
                        <label>Activo</label>
                        <select
                            className="form-control"
                            defaultValue={ activo }
                            onChange={ event => setActivo( event.target.value ) }
                        >
                            <option value={ 1 }>Si</option>
                            <option value={ 0 }>No</option>
                        </select>
                    </div>
                </div>
                <div className="card-footer">
                    <Link className="btn btn-secondary" to="/mCategorias">Cancelar</Link>
                    <button className="btn btn-primary btn-lg float-right" onClick={ () => handleAdd() } >Aceptar</button>
                </div>
            </div>

          </div>
        </div>
      </div>

        <Footer />
    </>
  )
}

export default AddCategoria; 