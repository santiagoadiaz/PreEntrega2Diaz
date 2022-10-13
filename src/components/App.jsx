import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './content/Navbar';
import Home from './content/Home';
import Pages from './content/Pages';
import Footer from './content/Footer';
import Producto from './content/Producto';
import Cart from './content/Cart';

// styles
import '../font/fontello.css'
import '../styles/App.css'
import '../styles/navbar.css'
import '../styles/pages.css'
import '../styles/footer.css'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Pages />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/producto/:id' element={<Producto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;