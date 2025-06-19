import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import ProductModal from './components/ProductModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Checkout from './pages/Checkout';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onProductClick={handleProductClick} onPageChange={setCurrentPage} />;
      case 'shop':
        return <Shop onProductClick={handleProductClick} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'checkout':
        return <Checkout />;
      default:
        return <Home onProductClick={handleProductClick} onPageChange={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onCartOpen={() => setIsCartOpen(true)}
        />
        
        <main>
          {renderCurrentPage()}
        </main>
        
        <Footer />
        
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => {
            setIsCartOpen(false);
            setCurrentPage('checkout');
          }}
        />
        
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </CartProvider>
  );
}

export default App;