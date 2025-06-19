import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface ShopProps {
  onProductClick: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick }) => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'Floral', 'Boisé', 'Terreux', 'Aromatique'];

  const filteredProducts = products.filter(product =>
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Notre Boutique</h1>
          <p className="text-xl text-stone-600">
            Découvrez notre collection complète de parfums artisanaux naturels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="text-lg font-semibold text-stone-800">Filtres</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-stone-600 hover:text-stone-800"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {category === 'all' ? 'Tous les parfums' : category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Trier par</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="name">Nom</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-stone-600">
                {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''}
              </p>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-stone-600 hover:text-stone-800">
                  <Grid className="w-5 h-5" />
                </button>
                <button className="p-2 text-stone-600 hover:text-stone-800">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;