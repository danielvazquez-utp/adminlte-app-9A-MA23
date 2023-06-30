import React from 'react';
import Addform from './components/Addform';
import EditForm from './components/EditForm';
import Menu from './components/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuCategorias from './components/categorias/MenuCategorias';
import AddCategoria from './components/categorias/AddCategoria';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Menu /> }  />
        <Route path="/addF" element={ <Addform /> }  />
        <Route path="/edit" element={ <EditForm /> }  />
        <Route path="/mCategorias" element={ <MenuCategorias /> }  />
        <Route path='/addCategoria' element={ <AddCategoria /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;