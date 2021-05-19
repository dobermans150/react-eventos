import React,{ Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaEventos from './components/ListaEventos';

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';




function App() {
  return (
  <Fragment>
    <EventosProvider>
    <CategoriasProvider>

      <Header />

      <div className="uk-container">
        <Formulario/>

        <ListaEventos />
        
      </div>
    </CategoriasProvider>
    </EventosProvider>
  </Fragment>
  );
}

export default App;
