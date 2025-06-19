import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();

  const handlePayment = () => {
    alert('Paiement effectué ! Merci pour votre commande.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Paiement</h1>
        <p className="text-stone-600">Votre panier est vide.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Paiement</h1>
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                <span>
                  {item.product.name} x {item.quantity}
                </span>
                <span>{item.product.price * item.quantity}€</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-lg font-semibold mb-8">
            <span>Total</span>
            <span>{getTotalPrice()}€</span>
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            Procéder au paiement
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
