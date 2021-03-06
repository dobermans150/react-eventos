import React from 'react'

const Evento = ({evento}) => {
    /* Extraer el texto */

    let {text} = evento.description;

    if(text){
        if (text.length >20) {
            text = text.substr(0,250);
            
        }
    }else{
        text = null;
    }

    return (
      <div>
            <div className="uk-card">
                <div className="uk-card-media-top">
                    {evento.logo ?
                        <img src={evento.logo.url} alt={evento.name}/>
                        :null}
                </div>
          
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>

          
                </div>
          
                <div className="uk-card-footer">
                    <a target="_blank" rel="noopener noreferrer" href={evento.url} className="uk-button uk-botton-secondary">
                        Mas informacion
                    </a>
                </div>
            </div>
      </div>
    )
}

export default Evento;