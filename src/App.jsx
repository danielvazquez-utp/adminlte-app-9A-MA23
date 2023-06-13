import React from 'react';
import Addform from './components/Addform';
import EditForm from './components/EditForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Addform /> }  />
        <Route path="/edit" element={ <EditForm /> }  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;