import React from 'react';

const Cards = () => {
    return (
        <div className='card-ms-12' style={{ width: '13rem' }}>
            <img className='card-img-top' src="../.././img/foto2.jpg" alt='christian' />
            <div className='card-body'>
                <div className='caja'>
                    <h5 className='card-title text-center'>Christian</h5>
                    <p className='card-title text-center'>Oficinista</p>
                    <p className='card-text text-center'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className='btn btn-primary' href='#p'>Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Cards;



