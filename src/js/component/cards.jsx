import React from 'react';
import PropTypes from 'prop-types';


function Cards({ imgs, altx, nombre, cargo, notas }) {
    const imagePath = require(`../../img/${imgs}.jpg`);
    return (
        <div className='card' style={{ width: '13rem' }}>
            <img className='card-img-top' src={imagePath} alt={altx || 'Imagen no disponible'} />
            onError ={(e) => { e.target.onerror = null; e.target.src = 'ruta/por/defecto.jpg'; }} // Imagen por defecto
            <div className='card-body'>
                <h5 className='card-title' >{nombre}</h5>
                <p className='card-text text-primary' >{cargo}</p>
                <p className='card-text' >{notas}</p>
                <a className='btn btn-primary' href='#p'>Find Out More!</a>
            </div>
        </div>
    );
}

// Definición de PropTypes
Cards.propTypes = {
    imgs: PropTypes.string.isRequired,
    altx: PropTypes.string,
    nombre: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    notas: PropTypes.string.isRequired,
};

export default Cards;


