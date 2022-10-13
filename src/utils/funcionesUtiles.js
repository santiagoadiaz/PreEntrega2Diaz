import { Link } from 'react-router-dom';

export const consultarBDD = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    const cardProducto = productos.map(producto =>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center flex-column containerCard" key={producto.id}>
            <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
            <div>
                <p className="text-product-one">{producto.marca}</p>
                <p className="text-product-two">{producto.nombre}</p>
                <p className="text-product-three">${producto.precio}</p>
                <Link to={"/producto"} ><button className='btn btn-food'>BUY</button></Link>
            </div>
        </div>)

    return cardProducto
}