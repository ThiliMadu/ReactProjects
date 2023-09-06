import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { ContactIn } from './components/ContactIn';
import { ContactUs } from './components/ContactUs';

function App() {
  const user = false;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />}></Route>
          {/* <Route path="contact" element={<Contact />}></Route> */}
          <Route path="contact" element={<Contact />}>
            <Route path="en" element={<ContactIn />}></Route>
            <Route path="us" element={<ContactUs />}></Route>
          </Route>
          <Route path="admin" element={user ? <Navigate to='/' /> : <Navigate to='products' />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;
