import { Link } from 'react-router-dom';

const Pages = () => {
    return (
        <>
            {/* complementary pages */}
            <section className="container-pages">
                <Link className="pages">PERROS</Link>
                <Link className="pages">GATOS</Link>
                <Link className="pages">SOBRE NOSOTROS</Link>
                <Link className="pages">SERVICIOS</Link>
                <Link className="pages">CONTACTO</Link>
            </section>
        </>
    );
}

export default Pages;
