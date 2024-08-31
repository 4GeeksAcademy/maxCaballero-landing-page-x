import React from 'react';
import '../img';

function Cards(props) {
    return (
        <div className='card' style={{ width: '13rem' }}>
            <img className='card-img-top' src={require(`../../img/${props.imgs}`)} alt={props.altx} />
            <div className='card-body'>
                <h5 className='card-title' >{props.nombre}</h5>
                <p className='card-text text-primary' >{props.cargo}</p>
                <p className='card-text' >{props.notas}</p>
                <a className='btn btn-primary' href='#'>Find Out More!</a>
            </div>
        </div>
    )
}
export default Cards;


