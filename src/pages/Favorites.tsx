import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useUser } from '../context/UserContext';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface FavoritesProps {
  onProductClick: (p: Product) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onProductClick }) => {
  const { products } = useProducts();
  const { user } = useUser();
  const favIds = user?.favorites || [];
  const favorites = products.filter(p => favIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Mes Favoris</h1>
      {favorites.length === 0 && <p>Aucun favori pour le moment.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(p => (
          <ProductCard key={p.id} product={p} onProductClick={onProductClick} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
