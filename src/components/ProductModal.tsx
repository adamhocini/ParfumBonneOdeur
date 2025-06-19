import React from 'react';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <h2 className="text-xl font-semibold text-stone-800">Détails du produit</h2>
            <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Image */}
              <div className="space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    {product.bestseller && (
                      <span className="text-sm text-white bg-emerald-500 px-2 py-1 rounded">
                        Best-seller
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-2xl font-bold text-stone-800 mb-2">{product.name}</h1>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm text-stone-500">(127 avis)</span>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Pyramid */}
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-stone-800 mb-3">Pyramide Olfactive</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-stone-700">Notes de tête :</span>
                      <span className="text-stone-600 ml-2">{product.notes.top.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-stone-700">Notes de cœur :</span>
                      <span className="text-stone-600 ml-2">{product.notes.heart.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-stone-700">Notes de fond :</span>
                      <span className="text-stone-600 ml-2">{product.notes.base.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Ingrédients Naturels</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="border-t border-stone-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-stone-800">{product.price}€</span>
                      <span className="text-stone-500 ml-2">• {product.volume}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;