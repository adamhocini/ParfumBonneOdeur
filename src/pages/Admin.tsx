import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';

const emptyProduct: Product = {
  id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  notes: { top: [''], heart: [''], base: [''] },
  ingredients: [''],
  volume: '',
};

const Admin: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ user: '', pass: '' });
  const [product, setProduct] = useState<Product>(emptyProduct);
  const { addProduct } = useProducts();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.user && credentials.pass) {
      setLoggedIn(true);
    }
  };

  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ ...product, id: Date.now().toString() });
    setProduct(emptyProduct);
    alert('Produit ajouté');
  };

  if (!loggedIn) {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Connexion Admin</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            placeholder="Utilisateur"
            value={credentials.user}
            onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
          />
          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="Mot de passe"
            value={credentials.pass}
            onChange={(e) => setCredentials({ ...credentials, pass: e.target.value })}
          />
          <button className="bg-emerald-600 text-white px-4 py-2 rounded" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ajouter un produit</h2>
      <form onSubmit={handleSubmitProduct} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Nom"
          name="name"
          value={product.name}
          onChange={handleProductChange}
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleProductChange}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Image URL"
          name="image"
          value={product.image}
          onChange={handleProductChange}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Catégorie"
          name="category"
          value={product.category}
          onChange={handleProductChange}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Prix"
          name="price"
          type="number"
          value={product.price}
          onChange={(e) => handleProductChange(e)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Volume"
          name="volume"
          value={product.volume}
          onChange={handleProductChange}
        />
        <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Admin;
