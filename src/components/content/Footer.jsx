import React from 'react';

const Footer = () => {
    return (
        <>
            {/* footer  */}
            <footer>
                {/* container footer visible */}
                <section className="container-footer ghost">
                    {/* sobre nosotros */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer">SOBRE NOSOTROS</h3>
                            </li>
                            <li><a className="letras-footer" href="../pages/nosotros.html">Nosotros</a></li>
                            <li><a className="letras-footer" href="#">Quienes somos</a></li>
                            <li><a className="letras-footer" href="../pages/contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                    {/* novedades */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer row-1">NOVEDADES</h3>
                            </li>
                            <li><a className="letras-footer" href="../pages/servicios.html">Servicios</a></li>
                            <li><a className="letras-footer" href="#">Terminos y condiciones</a></li>
                            <li><a className="letras-footer" href="#">Formas de pago</a></li>
                            <li><a className="letras-footer" href="#">Envios</a></li>
                            <li><a className="letras-footer" href="#">Politicas de cambio y devolucion</a></li>
                        </ul>
                    </div>
                    {/* redes */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer row-1">REDES</h3>
                            </li>
                            <li>
                                <a className="letras-footer" href="https://www.facebook.com/">
                                    <i className="icon-facebook-squared" />
                                </a>
                            </li>
                            <li>
                                <a className="letras-footer" href="https://www.instagram.com/">
                                    <i className="icon-instagram" />
                                </a>
                            </li>
                            <li>
                                <a className="letras-footer" href="https://www.instagram.com/">
                                    <i className="icon-whatsapp" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* divider */}
                <div className="divider ghost" />
                {/* todos los derechos */}
                <div className="d-flex justify-content-center ghost">
                    <p className="dr-footer">
                        Todos los derechos reservados.
                    </p>
                </div>
                {/* Display none */}
                <section className="ghost-pages">
                    {/* sobre nosotros */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle m-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            SOBRE NOSOTROS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item letras-footer" href="../pages/nosotros.html">Nosotros</a></li>
                            <li><a className="dropdown-item letras-footer" href="#">Quienes somos</a></li>
                            <li><a className="dropdown-item letras-footer" href="../pages/contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                    {/* novedades */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle ms-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            NOVEDADES
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item letras-footer" href="../pages/servicios.html">Servicios</a></li>
                            <li><a className="dropdown-item letras-footer" href="#"> Terminos y condiciones</a></li>
                            <li><a className="dropdown-item letras-footer" href="#">Formas de pago</a></li>
                            <li><a className="dropdown-item letras-footer" href="#">Envios</a></li>
                            <li><a className="dropdown-item letras-footer" href="#">Politicas de cambio y
                                devolucion</a></li>
                        </ul>
                    </div>
                    {/* divider */}
                    <div className="divider-mobile" />
                    {/* todos los derechos */}
                    <div className="d-flex justify-content-center">
                        <p className="dr-footer-mobile">
                            Todos los derechos reservados.
                        </p>
                    </div>
                    {/* redes */}
                    <div className="pb-5">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <a className="letras-footer me-3" href="https://www.facebook.com/">
                                    <img src="../image/facebook.svg" alt="facebook" />
                                </a>
                            </li>
                            <li>
                                <a className="letras-footer me-3" href="https://www.instagram.com/">
                                    <img src="../image/instagram.svg" alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a className="letras-footer" href="https://www.instagram.com/">
                                    <img src="../image/whatsapp.svg" alt="whatsapp" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
