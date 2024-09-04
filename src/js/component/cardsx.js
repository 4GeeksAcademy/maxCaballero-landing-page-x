import React from 'react';

const Cards = (props) => {
    // const imagePath = require(`../../img/${props.imgs}.jpg`);
    return (
        <div className='card-ms-12' style={{ width: '13rem' }}>
            <img className='card-img-top' src={require(`../../img/${props.imgs}.jpg`)} alt={props.altx} />
            <div className='card-body'>
                <div className='caja'>
                    <h5 className='card-title text-center'>{props.nombre}</h5>
                    <p className='card-title text-center'>{props.cargo}</p>
                    <p className='card-text text-center'>"{props.notas}".</p>
                    <a className='btn btn-primary' href='#p'>Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Cards;



