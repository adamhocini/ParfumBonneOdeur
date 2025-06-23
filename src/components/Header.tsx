import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();

  const navigation = [
    { name: 'Accueil', id: 'home' },
    { name: 'Boutique', id: 'shop' },
    { name: 'À Propos', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Blog', id: 'blog' }
  ];

  return (
    <header className="bg-ivory/95 backdrop-blur-sm sticky top-0 z-50 border-b border-rosegold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onPageChange('home')}
              className="text-2xl font-bold text-dark hover:text-sage transition-colors"
            >
              Essence Naturelle
            </button>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-dark border-b-2 border-sage'
                    : 'text-taupe hover:text-dark'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-taupe hover:text-dark transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-taupe hover:text-dark transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className="relative text-taupe hover:text-dark transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-sage text-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-taupe hover:text-dark transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-ivory border-t border-rosegold">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-dark bg-sage'
                    : 'text-taupe hover:text-dark hover:bg-sand'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;