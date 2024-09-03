import React from 'react';

const Cards = ({ imgs, altx, nombre, cargo, notas }) => {
    const imagePath = require(`./${imgs}.jpg`);
    return (
        <div className='card-ms-12' style={{ width: '13rem' }}>
            <img className='card-img-top' src={imagePath} alt={altx} />
            <div className='card-body'>
                <div className='caja'>
                    <h5 className='card-title text-center'>{nombre}</h5>
                    <p className='card-title text-center'>{cargo}</p>
                    <p className='card-text text-center'>"{notas}".</p>
                    <a className='btn btn-primary' href='#p'>Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Cards;



