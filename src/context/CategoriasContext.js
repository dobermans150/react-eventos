import React,{ Component } from "react";
import axios from 'axios';

//Crear el context
const CategoriasContext = React.createContext();
//crear Consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

export default class CategoriasProvider extends Component {
    //token para poder obtener los eventos
    token = 'XJOFYB6O42KJUAPVVSMD';

    state = {
        categorias: []

    }

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async() =>{
        //hacer una consulta con axios
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        let categorias = await axios.get(url);
        
        console.log(categorias.data.categories);
        
        //Guardar las categorias en el state
        this.setState({
            categorias: categorias.data.categories
        })
    }


    render() {
        return (
            /* Proveedor de categorias */
           <CategoriasContext.Provider
            value={{
                /* pasamos de la siguiente manera los datos */
                categorias: this.state.categorias
            }}
           >
            {/* Para poder Heredar la informacion a los componentes hijos se usa lo siguiente */}
            {this.props.children}
           </CategoriasContext.Provider>
        )
    }
}
