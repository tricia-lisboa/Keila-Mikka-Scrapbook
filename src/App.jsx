import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';
import Bolos from './components/Bolos/Bolos';
import * as S from './components/Bolos/BolosCss';

const App = () => {
  return (
    <>
    <S.GlobalStyle/>

    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/bolos" element={<Bolos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
