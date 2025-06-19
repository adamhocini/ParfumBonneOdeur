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
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onPageChange('home')}
              className="text-2xl font-bold text-stone-800 hover:text-stone-600 transition-colors"
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
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-stone-600 hover:text-stone-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartOpen}
              className="relative text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-600 hover:text-stone-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
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
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
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