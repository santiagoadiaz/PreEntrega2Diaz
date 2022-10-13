import React from 'react';

const DetalleProducto = ({ producto }) => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className='card-body'>
                        <p className="text-product-one">{producto.marca}</p>
                        <p className="text-product-two">{producto.nombre}</p>
                        <p className="text-product-three">${producto.precio}</p>
                        <button className='btn btn-food'>BUY</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;
