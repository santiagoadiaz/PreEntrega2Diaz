import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    }, []);


    return (
        <div className="container-product row pb-5 gy-5">
            {productos}
        </div>

    );
}

export default Home;