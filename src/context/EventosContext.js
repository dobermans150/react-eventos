import React, { Component } from 'react';
import axios from 'axios'

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


export default class EventosProvider extends Component {

    token = 'XJOFYB6O42KJUAPVVSMD';
    ordenar = 'date';

    state={
        eventos: []

    }

    obtenerEventos = async (busqueda) =>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        /* consultar la API con la URL */
        const eventos = await axios(url);

        this.setState({
            eventos: eventos.data.events
        });
        
    }
    render() {
        return (
           /* Proveedor de categorias */
           <EventosContext.Provider
            value={{
                /* pasamos de la siguiente manera los datos al provider */
                eventos: this.state.eventos,
                obtenerEventos: this.obtenerEventos
            }}
           >
            {/* Para poder Heredar la informacion a los componentes hijos se usa lo siguiente */}
            {this.props.children}
           </EventosContext.Provider>
        )
    }
}
